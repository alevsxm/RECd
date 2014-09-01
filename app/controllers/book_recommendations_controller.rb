class BookRecommendationsController < ApplicationController

  before_action :authenticate_user!

  def search
    @search = params[:title]
    @results = Amazon.search(@search)
    render json: @results.to_json, status: 200
  end


end
