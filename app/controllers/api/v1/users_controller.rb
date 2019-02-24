class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: current_user
  end

  def update
    if params["latLng"]
      lat = params["latLng"]["lat"]
      lng = params["latLng"]["lng"]
      current_user.update_attributes({ lat: lat, lng: lng })
    elsif params["allowLocation"]
      current_user.update_attribute(:location_permission, true)
      geolocate_user_ip
    end

    render json: current_user
  end

  private

  def geolocate_user_ip
    @user = current_user
      location_data = Geocoder.search(current_user.current_sign_in_ip).first.data
      @user.update_attributes({
        location_permission: true,
        lat: '%0.6f' % location_data["lat"],
        lng: '%0.6f' % location_data["lon"]
      })

  end

end
