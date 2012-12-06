class Tag < ActiveRecord::Base
  attr_accessible :name, :navigation

  has_and_belongs_to_many :issues
end
