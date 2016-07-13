class CreateApiFavorites < ActiveRecord::Migration
  def change
    create_table :api_favorites do |t|
      t.integer :author_id, null: false, index: true
      t.integer :project_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
