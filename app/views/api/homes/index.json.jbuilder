@homes.each do |home|
  json.set! home.id do
    json.extract! home, :address, :price, :beds, :baths, :location
  end
end