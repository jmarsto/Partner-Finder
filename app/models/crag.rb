class Crag < ApplicationRecord
  belongs_to :area, optional: true
  has_many :routes
end
