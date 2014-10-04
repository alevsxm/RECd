class MovieRecommendationsController < ApplicationController

  before_action :authenticate_user!

  def index
    @user = current_user
    @movie_recommendations = @user.received_movie_recommendations.where(finished: false)
    render json: @movie_recommendations.as_json(include: :recommendor), status: 200
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
    @user = User.find(@movie.recommendee_id)
    @sender = User.find(@movie.recommendor_id)
    UserMailer.new_movie_recommendation_email(@user, @sender, @movie).deliver
    render json: @movie.to_json, status: 200
  end

  def update
    @movie = params[:movie_recommendation]
    @movie_recommendation = MovieRecommendation.find(@movie["id"])
    @movie_recommendation.update({finished: @movie["finished"], recommendee_rating: @movie["recommendee_rating"]})
    render json: @movie.to_json, status: 200
  end

  def destroy
    MovieRecommendation.find(params[:id]).destroy
    render json: @movie.to_json, status: 200
  end

  private

  def movie_recommendation_params
    params.require(:movie_recommendation).permit(:title, :director, :cast,
    :year_released, :plot_summary, :poster_url, :message, :media_type, :rating,
    :finished, :recommendee_rating, :recommendee_id, :recommendor_id)
  end

end
