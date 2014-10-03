class UserMailer < ActionMailer::Base
  default from: "recdnotifications@gmail.com"

  def friend_request_email(user)
    @user = user
    @sender = User.find(@user.friend_requests.last.sender_id)
    mail(to: @user.email, subject: "#{@sender.first_name} #{@sender.last_name} wants to be friends on RECd")
  end

  def new_book_recommendation_email(user, sender, book_recommendation)
    @user = user
    @sender = sender
    @book_recommendation = book_recommendation
    mail(to: @user.email, subject: "You got RECd!")
  end

  def new_movie_recommendation_email(user, sender, movie_recommendation)
    @user = user
    @sender = sender
    @movie_recommendation = movie_recommendation
    mail(to: @user.email, subject: "You got RECd!")
  end
end
