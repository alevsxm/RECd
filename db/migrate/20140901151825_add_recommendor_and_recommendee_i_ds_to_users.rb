class AddRecommendorAndRecommendeeIDsToUsers < ActiveRecord::Migration
  def change
    add_column :book_recommendations, :recommendee_id, :integer
    add_column :book_recommendations, :recommendor_id, :integer
    add_column :movie_recommendations, :recommendee_id, :integer
    add_column :movie_recommendations, :recommendor_id, :integer
    remove_column :book_recommendations, :user_id
    remove_column :movie_recommendations, :user_id
  end
end
