# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_28_223959) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.string "sale_type"
    t.string "sold_date"
    t.string "property_type"
    t.string "address"
    t.string "city"
    t.string "state_or_province"
    t.string "zip_code"
    t.string "price"
    t.string "beds"
    t.string "baths"
    t.string "location"
    t.string "sq_feet"
    t.string "lot_size"
    t.string "yr_built"
    t.string "days_on_mkt"
    t.string "price_per_sq_foot"
    t.string "hoa_per_month"
    t.string "status"
    t.string "next_open_house_start_time"
    t.string "next_open_house_end_time"
    t.string "url"
    t.string "source"
    t.string "mls_num"
    t.string "favorite"
    t.string "interested"
    t.string "latitude"
    t.string "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
