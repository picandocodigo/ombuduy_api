class Reply < ActiveRecord::Base
  attr_accessible :image_url, :tweet_id, :twitter_reply_to_id, :user_id, :twitter_user_id, :issue_id, :text

  belongs_to :issue
end
