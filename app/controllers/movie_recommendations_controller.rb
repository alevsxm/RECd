class MovieRecommendationsController < ApplicationController

  before_action :authenticate_user!

  def index
    @user = current_user
    @movie_recommendations = @user.received_movie_recommendations
    render json: @movie_recommendations.to_json, status: 200
  end

  def movie_search
    @search = params[:title]
    @results = TMDB.movie_search(@search)
    render json: @results.to_json, status: 200
  end

  def tv_search
    @search = params[:title]
    @results = TMDB.tv_search(@search)
    render json: @results.to_json, status: 200
  end

  def create
    @movie = params[:movie_recommendation]
    @movie[:recommendor_id] = current_user.id
    @movie = MovieRecommendation.create(movie_recommendation_params)
    render json: @book.to_json, status: 200
  end



  def movie_recommendation_params
    params.require(:movie_recommendation).permit(:title, :director, :cast,
    :year_released, :plot_summary, :poster_url, :message, :media_type, :rating,
    :finished, :recommendee_rating, :recommendee_id, :recommendor_id)
  end

end
