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

class Api::UsersControllerTest < ActionController::TestCase
  setup do
    @request.headers["Accept"] = "application/json"
    @api_user = api_users(:user_one)
  end

  test "should create api_user" do
    assert_difference('Api::User.count') do
      post :create, {user: {email: "food@test.com", password:"flow-diy"}}
    end
    assert_response(:success)

    json_response = JSON.parse(@response.body)
    assert_equal json_response["email"], "food@test.com"
  end

  test "should show api_user" do
    get :show, id: @api_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_user
    assert_response :success
  end

  test "should update api_user" do
    put :update, id: @api_user.id , :user => {:email => 'MyString2'}

    @api_user.reload

    assert_equal "MyString2", @api_user.email
  end

  test "should destroy api_user" do
    assert_difference('Api::User.count', -1) do
      delete :destroy, id: @api_user
    end

    assert_response :success
  end
end
