class Area < ApplicationRecord
  belongs_to :destination, optional: true
  has_many :crags
end
