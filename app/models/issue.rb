class Issue < ActiveRecord::Base
  attr_accessible :relevance, :address, :latitude, :longitude, :image_url, :text, :user_id, :twitter_user_id, :tweet_id, :fixed_by

  has_and_belongs_to_many :tags
  has_many :replies

  has_one :user

  before_save do
    if self.fixed_by.to_s =~ /^[0-9]+$/
      self.fixed_by = Entity.find(self.fixed_by).name
    end
  end

  def as_json(options)
    json = {}
    json[:tags] = self.tags.map { |t| t.name }
    json[:id] = self.id
    json[:text] = self.text
    json[:author] = random_author
    json[:created_at] = self.created_at
    json[:relevance] = self.relevance
    json[:fixed_by] = self.fixed_by
    json[:image_url] = self.image_url
    json
  end

  private

  def random_author
    authors = ['banafederico', 'picandocodigo', 'martinloy', 'diegodiaz', 'franciscovillegas']
    authors[Random.rand(5).to_i]
  end

end
