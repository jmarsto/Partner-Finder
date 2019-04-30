class Api::V1::CragsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    location = params["crag"]
    response = MountainProjectRequest.new(location).response
    crags = CragSanitizer.new(response).crags
  end
end
