class FriendshipsController < ApplicationController
  before_action :authenticate
  before_action :authorize, only: [:index]

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
  end

  private
  def friend_accept_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
