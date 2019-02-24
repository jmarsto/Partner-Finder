class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  has_many :memberships
  has_many :gyms, through: :memberships

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
end
