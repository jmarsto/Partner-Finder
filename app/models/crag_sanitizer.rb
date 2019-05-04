require "faraday"

class CragSanitizer
  def initialize(response)
    @routes = response["routes"]
  end

  def crags
    set_of_crags = []
    @routes.each do |route|
      this_route = Route.new(name: route["name"], discipline: route["type"], rating: route["rating"], stars: route["stars"], lat: route["latitude"], lng: route["longitude"], url: route["url"], pitches: route["pitches"])
      this_route.save
      this_crag = Crag.new(name: route["location"].last)
      if !Crag.find_by(name: route["location"].last) # need to make more robust - there will be crags with same name!
        this_route.crag = this_crag
        this_crag.save
        this_route.save
      else
        this_crag = Crag.find_by(name: route["location"].last)
        if !this_crag.routes.include?(this_route)
          this_route.crag = this_crag
          this_crag.save
          this_route.save
        end
      end
      this_crag.reload
      this_crag.save
      set_of_crags << this_crag
    end

    set_of_crags.uniq!
    set_of_crags.each do |crag|
      all_latitudes = []
      all_longitudes = []
      crag.routes.each do |route|
        all_latitudes << route.lat
        all_longitudes << route.lng
      end

      sum_of_all_latitudes = all_latitudes.inject(0){ |sum, x| sum + x }
      sum_of_all_longitudes = all_longitudes.inject(0){ |sum, x| sum + x }

      avg_lat = sum_of_all_latitudes / all_latitudes.size
      avg_lng = sum_of_all_longitudes / all_longitudes.size
      
      crag.lat = avg_lat
      crag.lng = avg_lng
    end

    set_of_crags
  end

end
