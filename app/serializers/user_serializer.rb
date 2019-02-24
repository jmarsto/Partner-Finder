class UserSerializer < ActiveModel::Serializer
  attributes :id, :location_permission, :lat, :lng, :friends 
end
