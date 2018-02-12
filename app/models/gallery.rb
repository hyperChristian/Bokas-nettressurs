class Gallery < ActiveRecord::Base
  belongs_to :post
  has_many :images

  validates :title, presence: true
  validates :description, presence: true
end
