# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160428210736) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_pictures", force: :cascade do |t|
    t.integer  "imageable_id",   null: false
    t.string   "imageable_type", null: false
    t.string   "picture_url",    null: false
    t.string   "caption"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "api_pictures", ["imageable_id"], name: "index_api_pictures_on_imageable_id", using: :btree
  add_index "api_pictures", ["imageable_type"], name: "index_api_pictures_on_imageable_type", using: :btree
  add_index "api_pictures", ["picture_url"], name: "index_api_pictures_on_picture_url", using: :btree

  create_table "api_projects", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "api_projects", ["author_id"], name: "index_api_projects_on_author_id", using: :btree

  create_table "api_steps", force: :cascade do |t|
    t.integer  "order",      null: false
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "api_steps", ["order"], name: "index_api_steps_on_order", using: :btree
  add_index "api_steps", ["project_id"], name: "index_api_steps_on_project_id", using: :btree

  create_table "api_users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_users", ["email"], name: "index_api_users_on_email", unique: true, using: :btree
  add_index "api_users", ["session_token"], name: "index_api_users_on_session_token", unique: true, using: :btree

end
