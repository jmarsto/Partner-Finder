class CreateCrags < ActiveRecord::Migration[5.2]
  def change
    create_table :crags do |t|
      t.string :name, null: false
      t.float :lat
      t.float :lng
      t.belongs_to :area, optional: true
    end
  end
end
