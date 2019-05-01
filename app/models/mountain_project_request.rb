require "faraday"

class MountainProjectRequest
  def initialize(location)
    @lat = location[:lat]
    @lng = location[:lng]
  end

  def response
    base_url = 'https://www.mountainproject.com/data/get-routes-for-lat-lon'
    api_call = "#{base_url}?lat=#{@lat}&lon=#{@lng}&minDiff=5.6&maxDiff=5.15&maxResults=5&key=#{ENV["MOUNTAIN_PROJECT_API_KEY"]}"
    conn = Faraday.new(:url => "#{api_call}") do |faraday|
      faraday.request  :url_encoded
      faraday.adapter  Faraday.default_adapter
    end

    api_response = conn.get
    JSON.parse(api_response.body)
  end
end
