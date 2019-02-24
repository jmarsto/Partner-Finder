class CreateGyms < ActiveRecord::Migration[5.2]
  def change
    create_table :gyms do |t|
      t.float :lat
      t.float :lng
      t.string :name, null: false
    end
  end
end
