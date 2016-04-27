class CreateApiProjects < ActiveRecord::Migration
  def change
    create_table :api_projects do |t|
      t.string    :title,      null: false
      t.integer   :author_id,  null: false, index: true
      t.timestamps             null: false
    end
  end
end
