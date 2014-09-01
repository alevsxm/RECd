Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'application#index'

  resources :friendships, only: [:destroy]

  resources :friend_requests, only: [:index, :create, :destroy] do
    member do
      post 'accept'
      post 'reject'
    end
  end

  get 'book_recommendations/search'   =>  'book_recommendations#search', :as => :book_search

  get 'movie_recommendations/movie_search'   =>  'movie_recommendations#movie_search', :as => :movie_search
  get 'movie_recommendations/tv_search'   =>  'movie_recommendations#tv_search', :as => :tv_search

end
