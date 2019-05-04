class Route < ApplicationRecord
  belongs_to :crag, optional: true
end
