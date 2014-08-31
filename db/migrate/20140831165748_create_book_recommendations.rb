class CreateBookRecommendations < ActiveRecord::Migration
  def change
    create_table :book_recommendations do |t|
      t.string :title
      t.string :author
      t.integer :year_published
      t.text :plot_summary
      t.text :cover_url
      t.text :message
      t.text :amazon_purchase_link
      t.boolean :finished, :default => false
      t.integer :recommendee_rating
      t.references :user

      t.timestamps
    end
  end
end
