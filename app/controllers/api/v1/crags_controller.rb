class Api::V1::CragsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    location = { lat: params["lat"], lng: params["lng"] }
    response = MountainProjectRequest.new(location).response
    # if the response["success"] != 1, fail
    crags = CragSanitizer.new(response).crags
    render json: crags
  end
end
