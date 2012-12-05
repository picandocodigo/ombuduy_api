class Tag < ActiveRecord::Base
  attr_accessible :name#:title, :body

  has_and_belongs_to_many :issues
end
