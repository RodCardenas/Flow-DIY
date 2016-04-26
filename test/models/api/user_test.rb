# == Schema Information
#
# Table name: api_users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class Api::UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
