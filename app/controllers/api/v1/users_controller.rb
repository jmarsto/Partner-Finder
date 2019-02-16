class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user.location_permission
      location_data = Geocoder.search(current_user.current_sign_in_ip).first.data
      @user = {
        id: current_user.id,
        email: current_user.email,
        location_permission: current_user.location_permission,
        bounding_box: location_data["boundingbox"],
        lat: location_data["lat"],
        lon: location_data["lon"]
      }
      render json: @user
    else
      render json: current_user
    end
  end

end
