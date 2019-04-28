# == Schema Information
#
# Table name: homes
#
#  id                         :bigint(8)        not null, primary key
#  sale_type                  :string
#  sold_date                  :string
#  property_type              :string
#  address                    :string
#  city                       :string
#  state_or_province          :string
#  zip_code                   :string
#  price                      :string
#  beds                       :string
#  baths                      :string
#  location                   :string
#  sq_feet                    :string
#  lot_size                   :string
#  yr_built                   :string
#  days_on_mkt                :string
#  price_per_sq_foot          :string
#  hoa_per_month              :string
#  status                     :string
#  next_open_house_start_time :string
#  next_open_house_end_time   :string
#  url                        :string
#  source                     :string
#  mls_num                    :string
#  favorite                   :string
#  interested                 :string
#  latitude                   :string
#  longitude                  :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

class Home < ApplicationRecord
end
