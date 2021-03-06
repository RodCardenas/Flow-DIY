class CreateApiSteps < ActiveRecord::Migration
  def change
    create_table :api_steps do |t|
      t.integer :order, null: false, index: true
      t.string :title, null: false
      t.text :body, null: false
      t.integer :project_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
