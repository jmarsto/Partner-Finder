class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: current_user
  end

  def update
    lat = params["latLng"]["lat"]
    lng = params["latLng"]["lng"]
    current_user.update_attributes({ lat: lat, lng: lng })

    render json: current_user
  end

end
