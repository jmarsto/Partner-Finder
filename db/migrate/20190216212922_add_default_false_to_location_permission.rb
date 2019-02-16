class AddDefaultFalseToLocationPermission < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :location_permission, from: nil, to: false
  end
end
