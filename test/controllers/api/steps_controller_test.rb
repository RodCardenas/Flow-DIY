# == Schema Information
#
# Table name: api_steps
#
#  id         :integer          not null, primary key
#  order      :integer          not null
#  title      :string           not null
#  body       :text             not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::StepsControllerTest < ActionController::TestCase
  # setup do
  #   @api_step = api_steps(:one)
  # end

  # test "should get index" do
  #   get :index
  #   assert_response :success
  #   assert_not_nil assigns(:api_steps)
  # end
  #
  # test "should get new" do
  #   get :new
  #   assert_response :success
  # end

  # test "should create api_step" do
  #   assert_difference('Api::Step.count') do
  #     post :create, api_step: { body: @api_step.body, order: @api_step.order, project_id: @api_step.project_id, title: @api_step.title }
  #   end
  #
  #   assert_redirected_to api_step_path(assigns(:api_step))
  # end
  #
  # test "should show api_step" do
  #   get :show, id: @api_step
  #   assert_response :success
  # end
  #
  # test "should get edit" do
  #   get :edit, id: @api_step
  #   assert_response :success
  # end
  #
  # test "should update api_step" do
  #   patch :update, id: @api_step, api_step: { body: @api_step.body, order: @api_step.order, project_id: @api_step.project_id, title: @api_step.title }
  #   assert_redirected_to api_step_path(assigns(:api_step))
  # end
  #
  # test "should destroy api_step" do
  #   assert_difference('Api::Step.count', -1) do
  #     delete :destroy, id: @api_step
  #   end
  #
  #   assert_redirected_to api_steps_path
  # end
end
