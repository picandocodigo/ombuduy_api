class Reply < ActiveRecord::Base
  attr_accessible :image_url, :tweet_id, :twitter_reply_to_id, :user_id, :twitter_user_id, :issue_id, :text

  belongs_to :issue

  def as_json(options)
    json = {}
    json[:id] = self.id
    json[:text] = self.text
    json[:author] = random_author
    json[:created_at] = self.created_at
    json
  end

  private

  def random_author
    authors = ['banafederico', 'picandocodigo', 'martinloy', 'diegodiaz', 'franciscovillegas']
    authors[Random.rand(5).to_i]
  end
end
