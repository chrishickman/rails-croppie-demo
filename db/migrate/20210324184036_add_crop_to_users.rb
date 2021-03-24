class AddCropToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :crop_x, :string
    add_column :users, :crop_y, :string
    add_column :users, :crop_width, :string
    add_column :users, :crop_height, :string
  end
end
