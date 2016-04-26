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

class Api::UsersController < ApplicationController
  before_action :set_api_user, only: [:show, :edit, :update, :destroy]

  # GET /api/users/1
  def show
  end

  # GET /api/users/new
  def new
    @api_user = Api::User.new
  end

  # GET /api/users/1/edit
  def edit
  end

  # POST /api/users
  def create
    @api_user = Api::User.new(api_user_params)

    if @api_user.save
      render :show, status: :created, location: @api_user
    else
      render json: @api_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  def update
    if @api_user.update(api_user_params)
      render :show, status: :ok, location: @api_user
    else
      render json: @api_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  def destroy
    @api_user.destroy
    render json: @api_user #TODO: What is this?
  end

  private
    def set_api_user
      @api_user = Api::User.find(params[:id])
    end

    def api_user_params
      params.require(:user).permit(:email, :password)
    end
end
