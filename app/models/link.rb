class Link < ActiveRecord::Base
  belongs_to :post

  validates :title, presence:true
  validates :description, presence: true
  validates :url, presence: true
end
