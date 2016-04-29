# == Schema Information
#
# Table name: api_steps
#
#  id         :integer          not null, primary key
#  order      :integer          not null
#  title      :string           not null
#  body       :string           not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::StepsController < ApplicationController
  before_action :set_api_step, only: [:show, :edit, :update, :destroy]

  # GET /api/steps.json
  def index
    @api_steps = Api::Step.all.includes(:pictures)
  end

  # GET /api/steps/1.json
  def show
  end

  # GET /api/steps/new
  def new
    @api_step = Api::Step.new
  end

  # GET /api/steps/1/edit
  def edit
  end

  # POST /api/steps.json
  def create
    @api_step = Api::Step.new(api_step_params)

      if @api_step.save
        format.json { render :show, status: :created, location: @api_step }
      else
        @errors = @api_step.errors.full_messages
        render "api/shared/error", status: 401
      end
    end
  end

  # PATCH/PUT /api/steps/1.json
  def update
    if @api_step.update(api_step_params)
      format.json { render :show, status: :ok, location: @api_step }
    else
      @errors = @api_step.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # DELETE /api/steps/1.json
  def destroy
    @api_step.destroy
    format.json { head :no_content }
  end

  private
    def set_api_step
      @api_step = Api::Step.includes(:pictures).find(params[:id])
    end

    def api_step_params
      params.require(:api_step).permit(:order, :title, :body, :project_id)
    end
end
