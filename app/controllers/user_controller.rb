class UsersController < ApplicationController

  before_action :authenticate_user!

  def friends
    @friends = User.find(params[:id]).friends
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
