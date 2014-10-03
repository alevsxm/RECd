class FriendRequestsController < ApplicationController

  before_action :authenticate_user!

  def index
    @friend_requests = current_user.friend_requests
    render json: @friend_requests.as_json(include: :sender), status:200
  end

  def create
    @friend_request = params[:friend_request]
    @friend_request[:sender_id] = current_user.id
    @friend_request = FriendRequest.create(friend_request_params)
    @user = User.find(@friend_request.user_id)
    UserMailer.friend_request_email(@user).deliver
    render json: @results.to_json, status: 200
  end

  def accept
    @friend_request = params[:friend_request]
    Friendship.create(user_id: @friend_request["user_id"], friend_id: @friend_request["sender_id"])
    @friend_request_to_destroy = FriendRequest.find(@friend_request["id"])
    @friend_request_to_destroy.destroy
    render json: @results.to_json, status: 200
  end

  def reject
    @friend_request = params[:friend_request]
    @friend_request_to_destroy = FriendRequest.find(@friend_request["id"])
    @friend_request_to_destroy.destroy
    render json: @results.to_json, status: 200
  end

  private
  def friend_request_params
    params.require(:friend_request).permit(:user_id, :sender_id)
  end

end
