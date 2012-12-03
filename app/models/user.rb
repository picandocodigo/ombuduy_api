class User < ActiveRecord::Base
  attr_accessible :twitter_user_id, :email, :nickname
end
