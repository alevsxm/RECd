class MovieRecommendationsController < ApplicationController

  before_action :authenticate_user!

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

end
