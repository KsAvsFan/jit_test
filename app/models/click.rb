class Click < ActiveRecord::Base
  attr_accessible :click_time, :click_type, :name_id

  belongs_to :user
end
