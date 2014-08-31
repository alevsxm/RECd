class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"

  validates :user_id, :friend_id, presence: true
  validates :user_id, :friend_id, numericality: {greater_than: 0}

  after_create :friend_back

  def friend_back
    friending = self

    friendor = User.find(friending.user_id)
    friendee = User.find(friending.friend_id)

    if !friendee.friends.include?(friendor)
      friendee.friends << friendor
    end
  end

end
