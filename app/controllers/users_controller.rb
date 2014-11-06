class UsersController < ApplicationController

  before_action :authenticate_user!

  def friends
    @friends = current_user.friends
    render json: @friends.to_json(methods: :avg_rating), status: 200
  end

  def search
    @search_params = params[:name_search]
    @search_first = params[:name_search].split(' ').first
    @search_last = params[:name_search].split(' ').last
    @users = User.where("first_name ILIKE ? or last_name ILIKE ? or first_name ILIKE ? or last_name ILIKE ?",
    @search_params, @search_params, @search_first, @search_last)
    render json: @users.to_json, status: 200
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil
    redirect_to users_path
  end

end
