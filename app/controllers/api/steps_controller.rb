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
    @api_step = Api::Step.new(
      order: params[:api_step][:order],
      title: params[:api_step][:title],
      body: params[:api_step][:body],
      project_id: params[:api_step][:project_id]
    )

    if @api_step.save
      params[:api_step][:pictures].each do |picture|
        Api::Picture.create!(
          imageable_type: "Api::Step",
          imageable_id: @api_step.id,
          picture_url: picture
        )
      end
      render "api/steps/show"
    else
      @errors = @api_step.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # PATCH/PUT /api/steps/1.json
  def update
    if @api_step.update(api_step_params)
      render "api/steps/show"
    else
      @errors = @api_step.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # DELETE /api/steps/1.json
  def destroy
    @api_step.destroy
    render @api_step.title + " has been deleted."
  end

  private
    def set_api_step
      @api_step = Api::Step.includes(:pictures).find(params[:id])
    end

    def api_step_params
      params.require(:api_step).permit(:order, :title, :body, :project_id, pictures: [])
    end
end
