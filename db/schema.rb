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

ActiveRecord::Schema.define(version: 2019_05_01_150810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "destination_id"
    t.index ["destination_id"], name: "index_areas_on_destination_id"
  end

  create_table "crags", force: :cascade do |t|
    t.string "name", null: false
    t.float "lat"
    t.float "lng"
    t.bigint "area_id"
    t.index ["area_id"], name: "index_crags_on_area_id"
  end

  create_table "destinations", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "gyms", force: :cascade do |t|
    t.float "lat"
    t.float "lng"
    t.string "name", null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "gym_id"
    t.index ["gym_id"], name: "index_memberships_on_gym_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "routes", force: :cascade do |t|
    t.float "lat"
    t.float "lng"
    t.float "stars"
    t.float "pitches"
    t.string "name", null: false
    t.string "rating"
    t.string "discipline"
    t.string "url"
    t.bigint "crag_id"
    t.index ["crag_id"], name: "index_routes_on_crag_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "location_permission", default: false
    t.float "lat"
    t.float "lng"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "friendships", "users"
  add_foreign_key "friendships", "users", column: "friend_id"
end
