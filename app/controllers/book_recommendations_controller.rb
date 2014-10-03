class BookRecommendationsController < ApplicationController

  before_action :authenticate_user!

  def index
    @user = current_user
    @book_recommendations = @user.received_book_recommendations.where(finished: false)
    render json: @book_recommendations.as_json(include: :recommendor), status: 200
  end

  def search
    @search = params[:title]
    @results = Amazon.search(@search)
    render json: @results.to_json, status: 200
  end

  def create
    @book = params[:book_recommendation]
    @book[:recommendor_id] = current_user.id
    @book = BookRecommendation.create(book_recommendation_params)
    @user = User.find(@book.recommendee_id)
    @sender = User.find(@book.recommendor_id)
    UserMailer.new_book_recommendation_email(@user, @sender, @book).deliver
    render json: @book.to_json, status: 200
  end

  def update
    @book = params[:book_recommendation]
    BookRecommendation.update(@book["id"], {finished: @book["finished"], recommendee_rating: @book["recommendee_rating"]})
    render json: @book.to_json, status: 200
  end

  def destroy
    BookRecommendation.find(params[:id]).destroy
    render json: @book.to_json, status: 200
  end

  private

  def book_recommendation_params
    params.require(:book_recommendation).permit(:title, :author,
    :year_published, :plot_summary, :cover_url, :message, :amazon_purchase_link,
    :finished, :recommendee_rating, :recommendee_id, :recommendor_id)
  end

end
