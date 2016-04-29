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

class Api::ProjectsController < ApplicationController
  before_action :set_api_project, only: [:show, :edit, :update, :destroy]

  # GET /api/projects.json
  def index
    @api_projects = Api::Project.all.includes(:author, :pictures, steps: [:pictures])
    puts @api_projects
  end

  # GET /api/projects/1.json
  def show
  end

  # GET /api/projects/new
  def new
    @api_project = Api::Project.new
  end

  # GET /api/projects/1/edit
  def edit
  end

  # POST /api/projects.json
  def create
    @api_project = Api::Project.new(api_project_params)

    if @api_project.save
      format.json { render :show, status: :created, location: @api_project }
    else
      @errors = @api_project.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # PATCH/PUT /api/projects/1.json
  def update
    if @api_project.update(api_project_params)
      format.json { render :show, status: :ok, location: @api_project }
    else
      @errors = @api_project.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # DELETE /api/projects/1.json
  def destroy
    @api_project.destroy
    format.json { head :no_content } #TODO
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_project
      @api_project = Api::Project.includes(:author, :pictures, steps: [:pictures]).find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_project_params
      params.require(:project).permit(:title, :author_id)
    end

end
