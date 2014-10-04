class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  #:lockable, :timeoutable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable,
         :omniauth_providers => [:facebook]

  # Books
  has_many :given_book_recommendations, :class_name => "BookRecommendation",
  :foreign_key => "recommendor_id", dependent: :destroy
  has_many :received_book_recommendations, :class_name => "BookRecommendation",
  :foreign_key => "recommendee_id", dependent: :destroy

  # Movies
  has_many :given_movie_recommendations, :class_name => "MovieRecommendation",
  :foreign_key => "recommendor_id", dependent: :destroy
  has_many :received_movie_recommendations, :class_name => "MovieRecommendation",
  :foreign_key => "recommendee_id", dependent: :destroy

  # Friendships
  has_many :friendships, dependent: :destroy
  has_many :friends, :through => :friendships

  # Friend Requests
  has_many :friend_requests, dependent: :destroy

  # Inverse Friendships...
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user

  #Paperclip
  has_attached_file :avatar, :styles =>
  { :medium => "300x300>", :thumb => "100x100>" },
  :default_url => "/assets/:style/default_user_image.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.first_name = auth.info.first_name   # assuming the user model has a name
      user.last_name = auth.info.last_name
      user.image = auth.info.image # assuming the user model has an image
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  #Calculates the average rating of a users movie recommendations
  def avg_rating
    movie_recs = self.given_movie_recommendations
    book_recs = self.given_book_recommendations
    ratings = (movie_recs + book_recs).map(&:recommendee_rating).compact
    return 0 if ratings.empty?
    (ratings.sum.to_f / ratings.size.to_f).round(1)
  end

end
