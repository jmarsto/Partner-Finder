class Api::V1::GymsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    gyms = params["_json"]
    return_gyms = []
    gyms.each do |gym|
      new_gym = Gym.new(name: gym["name"], lat: gym["lat"], lng: gym["lng"])
      if !Gym.find_by(name: new_gym.name, lat: new_gym.lat, lng: new_gym.lng)
        new_gym.save
      end
      return_gyms << new_gym
    end
  end
end
