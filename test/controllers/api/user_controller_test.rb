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

class Api::UserControllerTest < ActionController::TestCase
  setup do
    @api_user = api_users(:one)
  end

  # TODO

  # test "should successfully create a new thing" do
  #   assert_difference 'Thing.count' do
  #     @request.headers["Accept"] = "application/json"
  #
  #     post(:create, {thing: {name: "My Thing"}})
  #   end
  #
  #   assert_response :success
  #
  #   json_response = JSON.parse(@response.body)
  #   assert_equal json_response["name"], "My Thing"
  # end
  #

  test "should create api_user" do
    assert_difference('Api::User.count') do
      post :create, user: {email: "food"}
    end

    assert_redirected_to api_user_path(assigns(:api_user))
  end

  test "should show api_user" do
    get :show, id: @api_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_user
    assert_response :success
  end

  test "should destroy api_user" do
    assert_difference('Api::User.count', -1) do
      delete :destroy, id: @api_user
    end

    assert_redirected_to api_users_path
  end
end
