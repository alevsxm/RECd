Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'application#index'

  resources :friendships, only: [:destroy]

  resources :friend_requests, only: [:index, :create]
  post 'friend_requests/accept' => 'friend_requests#accept', :as => "accept_friend_request"
  delete 'friend_requests/reject' => 'friend_requests#reject', :as => "reject_friend_request"

  get 'book_recommendations/search'   =>  'book_recommendations#search', :as => :book_search
  resources :book_recommendations, only: [:index, :create]

  get 'movie_recommendations/movie_search'   =>  'movie_recommendations#movie_search', :as => :movie_search
  get 'movie_recommendations/tv_search'   =>  'movie_recommendations#tv_search', :as => :tv_search
  resources :movie_recommendations, only: [:index, :create]

  get 'users/friends'  => 'users#friends', :as => :friends
  get 'users/search' => 'users#search', :as => :friends_search

end
