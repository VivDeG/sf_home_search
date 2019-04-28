# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

ApplicationRecord.transaction do

  Home.destroy_all

  homes = CSV.read("./db/data/sf_homes.csv", headers: true)
  
  homes.each do |home|
    Home.create!(
      sale_type: home["sale_type"],
      sold_date: home["sold_date"],
      property_type: home["property_type"],
      address: home["address"],
      city: home["city"],
      state_or_province: home["state_or_province"],
      zip_code: home["zip_code"],
      price: home["price"],
      beds: home["beds"],
      baths: home["baths"],
      location: home["location"],
      sq_feet: home["sq_feet"],
      lot_size: home["lot_size"],
      yr_built: home["yr_built"],
      days_on_mkt: home["days_on_mkt"],
      price_per_sq_foot: home["price_per_sq_foot"],
      hoa_per_month: home["hoa_per_month"],
      status: home["status"],
      next_open_house_start_time: home["next_open_house_start_time"],
      next_open_house_end_time: home["next_open_house_end_time"],
      url: home["url"],
      source: home["source"],
      mls_num: home["mls_num"],
      favorite: home["favorite"],
      interested: home["interested"],
      latitude: home["latitude"],
      longitude: home["longitude"],
    )
  end
end
