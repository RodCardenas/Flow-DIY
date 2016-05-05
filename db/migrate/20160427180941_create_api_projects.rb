class CreateApiProjects < ActiveRecord::Migration
  def change
    create_table :api_projects do |t|
      t.string    :title,      null: false
      t.integer   :author_id,  null: false, index: true
      t.timestamps             null: false
    end
    add_index "api_projects", ["author_id", "title"], :unique => true
  end
end
