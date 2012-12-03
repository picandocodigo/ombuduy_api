class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.integer :relevance
      t.string  :address
      t.decimal :latitude
      t.decimal :longitude
      t.string  :image_url
      t.string  :text
      t.integer :user_id
      t.string  :twitter_user_id
      t.string  :tweet_id
      t.integer :fixed
      t.timestamps
    end
  end
end
