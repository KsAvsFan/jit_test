class CreateClicks < ActiveRecord::Migration
  def change
    create_table :clicks do |t|
      t.string :name
      t.string :click_type
      t.integer :click_time

      t.timestamps
    end
  end
end
