# == Schema Information
#
# Table name: api_projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::ProjectsControllerTest < ActionController::TestCase
  setup do
    @api_project = api_projects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_projects)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_project" do
    assert_difference('Api::Project.count') do
      post :create, api_project: {  }
    end

    assert_redirected_to api_project_path(assigns(:api_project))
  end

  test "should show api_project" do
    get :show, id: @api_project
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_project
    assert_response :success
  end

  test "should update api_project" do
    patch :update, id: @api_project, api_project: {  }
    assert_redirected_to api_project_path(assigns(:api_project))
  end

  test "should destroy api_project" do
    assert_difference('Api::Project.count', -1) do
      delete :destroy, id: @api_project
    end

    assert_redirected_to api_projects_path
  end
end
