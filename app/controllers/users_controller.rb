class UsersController < ApplicationController

  before_action :authenticate_user!

  def friends
    @friends = current_user.friends
    render json: @friends.to_json, status: 200
  end

  def search
    @users = User.where(first_name: params[:first_name]);
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
