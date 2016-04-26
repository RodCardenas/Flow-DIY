class CreateApiUsers < ActiveRecord::Migration
  def change
    create_table :api_users do |t|

      t.timestamps null: false
    end
  end
end
