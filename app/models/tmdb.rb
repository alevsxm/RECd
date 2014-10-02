class TMDB

  @tmdb_api_key = ENV['TMDB_API_KEY']

  def self.tv_search(search_term)
    tv_results = []
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/search/tv?api_key=#{@tmdb_api_key}&query=#{search_term}"))
    tmdb_response["results"].each do |result|
      result_hash = {}
      result_hash[:tmdb_id] = result["id"]
      result_hash[:title] = result["original_name"]
      result["first_air_date"] ? result_hash[:year_released] = result["first_air_date"].split("-")[0] : "N/A"
      result["poster_path"] ? result_hash[:poster_url] = "http://image.tmdb.org/t/p/w500" + result["poster_path"] : "No Image"
      result_hash[:rating] = result["vote_average"].to_s
      director_and_plot =  tv_director_and_plot(result_hash[:tmdb_id])
      result_hash[:director] = director_and_plot[0]
      result_hash[:plot_summary] = director_and_plot[1]
      result_hash[:cast] = tv_cast(result_hash[:tmdb_id]).take(5)
      result_hash[:media_type] = "tv"
      tv_results << result_hash
    end
    tv_results
  end

  def self.movie_search(search_term)
    movie_results = []
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/search/movie?api_key=#{@tmdb_api_key}&query=#{search_term}"))
    tmdb_response["results"].each do |result|
      result_hash = {}
      result_hash[:tmdb_id] = result["id"]
      result_hash[:title] = result["title"]
      result_hash[:year_released] = result["release_date"].split("-")[0]
      result["poster_path"] ? result_hash[:poster_url] = "http://image.tmdb.org/t/p/w500" + result["poster_path"] : "No Image"
      result_hash[:rating] = result["vote_average"].to_s
      result_hash[:plot_summary] = movie_plot(result_hash[:tmdb_id])
      director_and_cast =  movie_director_and_cast(result_hash[:tmdb_id])
      result_hash[:director] = director_and_cast[0]
      result_hash[:cast] = director_and_cast[1]
      result_hash[:media_type] = "movie"
      movie_results << result_hash
    end
    movie_results
  end

  private

  def self.tv_director_and_plot(imdb_id)
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/tv/#{imdb_id}?api_key=#{@tmdb_api_key}"))
    director_and_plot = []
    directors = []
    tmdb_response["created_by"].each do |creator|
      directors << creator["name"]
    end
    director_and_plot << directors
    director_and_plot << tmdb_response["overview"]
  end

  def self.tv_cast(imdb_id)
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/tv/#{imdb_id}/credits?api_key=#{@tmdb_api_key}"))
    cast_member_names = []
    tmdb_response["cast"].each do |cast_member|
      cast_member_names << cast_member["name"]
    end
    if cast_member_names.any?
      cast_member_names = cast_member_names.join(', ')
    end
  end


  def self.movie_plot(imdb_id)
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/movie/#{imdb_id}?api_key=#{@tmdb_api_key}"))
    plot = tmdb_response["overview"]
  end

  def self.movie_director_and_cast(imdb_id)
    tmdb_response = HTTParty.get(URI.escape("http://api.themoviedb.org/3/movie/#{imdb_id}/credits?api_key=#{@tmdb_api_key}"))
    director_and_cast = []
    cast = []
    tmdb_response["crew"].each do |crew_member|
      crew_member["job"] == "Director" ? director_and_cast << crew_member["name"] == "Director" : nil
    end
    tmdb_response["cast"].take(5).each do |cast_member|
      cast << cast_member["name"]
    end
    if cast.any?
      cast = cast.join(', ')
    end
    director_and_cast << cast
  end

end
