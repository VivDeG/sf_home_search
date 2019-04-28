class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :sale_type
      t.string :sold_date
      t.string :property_type
      t.string :address
      t.string :city
      t.string :state_or_province
      t.string :zip_code
      t.string :price
      t.string :beds
      t.string :baths
      t.string :location
      t.string :sq_feet
      t.string :lot_size
      t.string :yr_built
      t.string :days_on_mkt
      t.string :price_per_sq_foot
      t.string :hoa_per_month
      t.string :status
      t.string :next_open_house_start_time
      t.string :next_open_house_end_time
      t.string :url
      t.string :source
      t.string :mls_num
      t.string :favorite
      t.string :interested
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
