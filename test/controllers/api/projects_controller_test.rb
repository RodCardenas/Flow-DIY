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
    @request.headers["Accept"] = "application/json"
    @api_project = api_projects(:project_one)
    @api_user = api_users(:user_one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_projects)
  end

  test "should create api_project" do
    assert_difference('Api::Project.count') do
      post :create, project: {title:"Test", author_id: @api_user.id}
    end

    assert_response(:success)

    json_response = JSON.parse(@response.body)
    assert_equal json_response["title"], "Test"
  end

  test "should show api_project" do
    get :show, id: @api_project
    assert_response :success
  end

  test "should update api_project" do
    put :update, id: @api_project.id , :project => {:title => 'Changed'}

    @api_project.reload

    assert_equal "Changed", @api_project.title
  end

  test "should destroy api_project" do
    assert_difference('Api::Project.count', -1) do
      delete :destroy, id: @api_project
    end

    assert_response :success
  end
end
