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
    @api_projects = Api::Project.includes(:author, :pictures, steps: [:pictures])
  end

  def search
    @api_search_projects = Api::Project.includes(:author, :pictures, steps: [:pictures]).where("UPPER(title) ~ UPPER(?)", params[:search]).limit(24)
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
      if params[:project][:pictures]
        params[:project][:pictures].each do |picture|
          Api::Picture.create!(
            imageable_type: "Api::Project",
            imageable_id: @api_project.id,
            picture_url: picture
          )
        end
      else
        @api_project.get_default_project_picture
      end
      render "api/projects/show"
    else
      @errors = @api_project.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/projects/1.json
  def update
    if @api_project.update(api_project_params)
      render "api/projects/show"
    else
      @errors = @api_project.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  # DELETE /api/projects/1.json
  def destroy
    @api_project.destroy
    render @api_project.title + " has been deleted."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_project
      @api_project = Api::Project.includes(:author, :pictures, steps: [:pictures]).find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_project_params
      params.require(:project).permit(:title, :author_id, pictures:[])
    end

end
