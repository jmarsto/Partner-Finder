class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user.location_permission
      render json: geolocated_user
    else
      render json: current_user
    end
  end

  def update
    current_user.update_attribute(:location_permission, true)
    render json: geolocated_user
  end

  private

  def geolocated_user
    location_data = Geocoder.search(current_user.current_sign_in_ip).first.data
    lat = '%0.6f' % location_data["lat"]
    lng = '%0.6f' % location_data["lon"]

    @user = {
      id: current_user.id,
      email: current_user.email,
      location_permission: current_user.location_permission,
      bounding_box: location_data["boundingbox"],
      lat: lat.to_f,
      lng: lng.to_f
    }

    return @user
  end

end
