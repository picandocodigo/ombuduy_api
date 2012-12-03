class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.integer :tweet_id
      t.string  :text
      t.string  :twitter_reply_to_id
      t.integer :user_id
      t.string  :twitter_user_id
      t.integer :issue_id
      t.string  :image_url
      t.timestamps
    end
  end
end
