class CreateGyms < ActiveRecord::Migration[5.2]
  def change
    create_table :gyms do |t|
      t.integer :lat
      t.integer :lng
      t.string :name, null: false
    end
  end
end
