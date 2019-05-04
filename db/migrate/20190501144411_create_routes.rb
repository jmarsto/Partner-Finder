class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.float :lat
      t.float :lng
      t.float :stars
      t.float :pitches
      t.string :name, null: false
      t.string :rating
      t.string :discipline
      t.string :url
      t.belongs_to :crag, optional: true
    end
  end
end
