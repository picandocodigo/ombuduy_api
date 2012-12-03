class Issue < ActiveRecord::Base
  attr_accessible :relevance, :address, :latitude, :longitude, :image_url, :text, :user_id, :twitter_user_id, :tweet_id, :fixed

  has_and_belongs_to_many :tags
  has_many :replies

  has_one :user
end
