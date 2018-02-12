class Image < ActiveRecord::Base
  belongs_to :gallery

  validates :image, presence: true
  validates :description, presence: true
end
