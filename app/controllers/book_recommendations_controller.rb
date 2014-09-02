class BookRecommendationsController < ApplicationController

  before_action :authenticate_user!

  def search
    @search = params[:title]
    @results = Amazon.search(@search)
    render json: @results.to_json, status: 200
  end

  def create
    @book = params[:book_recommendation]
    @book[:recommendor_id] = current_user.id
    @book = BookRecommendation.create(book_recommendation_params)
    render json: @book.to_json, status: 200
  end

  def book_recommendation_params
    params.require(:book_recommendation).permit(:title, :author,
    :year_published, :plot_summary, :cover_url, :message, :amazon_purchase_link,
    :finished, :recommendee_rating, :recommendee_id, :recommendor_id)
  end

end
