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
    if params["latLng"]
      render json: geolocated_user(params["latLng"])
    else
      current_user.update_attribute(:location_permission, true)
      render json: geolocated_user
    end
  end

  private

  def geolocated_user(lat_lng = nil)
    @user = current_user
    if lat_lng
      @user.lat = lat_lng["lat"]
      @user.lng = lat_lng["lng"]
    else
      location_data = Geocoder.search(current_user.current_sign_in_ip).first.data
      @user.lat = '%0.6f' % location_data["lat"]
      @user.lng = '%0.6f' % location_data["lon"]
    end

    @user.save

    return @user
  end

end
