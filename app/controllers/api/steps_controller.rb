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

class Api::StepsController < ApplicationController
  before_action :set_api_step, only: [:show, :edit, :destroy]

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
      project_id: params[:project_id]
    )

    if @api_step.save
      unless params[:api_step][:pictures].nil?
        params[:api_step][:pictures].each do |picture|
          Api::Picture.create!(
            imageable_type: "Api::Step",
            imageable_id: @api_step.id,
            picture_url: picture.url,
            caption: picture.caption
          )
        end
      end
      render "api/steps/show"
    else
      @errors = @api_step.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  def changeOrder
    steps = []
    @api_step = Api::Step.find(params[:id])
    newOrder = params[:api_step][:order].to_i
    oldOrder = @api_step.order.to_i

    @api_steps = Api::Step.where("project_id = ?", params[:api_step][:project_id].to_i)

    @api_steps.each do |step|
      if step.order == newOrder
        step.update_attributes(order: oldOrder)
        steps << step
        break
      end
    end

    @api_step.update_attributes(order: newOrder)
    steps << @api_step
    render json: steps
  end

  def update
    @api_step = Api::Step.find(params[:id])

    if @api_step.update_attributes(
        order: params[:api_step][:order],
        title: params[:api_step][:title],
        body: params[:api_step][:body],
        project_id: params[:api_step][:project_id]
      )

      render "api/steps/show"
    else
      @errors = @api_step.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  # DELETE /api/steps/1.json
  def destroy
    target_order = @api_step.order
    @api_step.destroy

    project_steps = Api::Step.where(project_id: @api_step.project_id).sort_by{|step| step.order}

    if target_order == 1
      project_steps.each do |step|
        step.update_attributes(order: step.order - 1)
      end
    elsif project_steps.length == 1
      project_steps.first.update_attributes(order: 1)
    else
      project_steps.each do |step|
        if target_order < step.order
          step.update_attributes(order: step.order - 1)
        end
      end
    end

    render json: @api_step
  end

  private
    def set_api_step
      @api_step = Api::Step.includes(:pictures).find(params[:id])
    end

    def api_step_params
      params.require(:api_step).permit(:order, :title, :body, :project_id, pictures: [])
    end
end
