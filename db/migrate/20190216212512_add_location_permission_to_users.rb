class AddLocationPermissionToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location_permission, :boolean
  end
end
