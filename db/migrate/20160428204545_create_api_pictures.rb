class CreateApiPictures < ActiveRecord::Migration
  def change
    create_table :api_pictures do |t|
      t.integer :imageable_id, null: false, index: true
      t.string :imageable_type, null: false, index: true
      t.string :picture_url, null: false, index: true
      t.string :caption
      t.timestamps null: false
    end
  end
end
