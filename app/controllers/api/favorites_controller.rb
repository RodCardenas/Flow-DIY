# == Schema Information
#
# Table name: api_favorites
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::FavoritesController < ApplicationController
  before_action :set_api_favorite, only: [:show, :update, :destroy]

  # GET /api/favorites.json
  def index
    auth = params[:favorite][:author_id]
    proj = params[:favorite][:project_id]

    if auth.empty? && proj.empty?
      @api_favorites = Api::Favorite
    elsif proj.empty? && !auth.empty?
      @api_favorites = Api::Favorite.where(author_id: auth)
    elsif !proj.empty? && auth.empty?
      puts "HERERERER!"
      @api_favorites = Api::Favorite.where(project_id: proj)
    else
      @api_favorites = Api::Favorite.where(project_id: proj).where(author_id: auth)
    end
  end

  # GET /api/favorites/1.json
  def show
  end

  # POST /api/favorites.json
  def create
    @api_favorite = Api::Favorite.new(api_favorite_params)

    if @api_favorite.save
      render "api/favorites/show"
    else
      @errors = @api_favorite.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/favorites/1.json
  def update
    if @api_favorite.update(api_favorite_params)
      format.json { render :show, status: :ok, location: @api_favorite }
    else
      @errors = @api_favorite.errors.full_messages
      render "api/shared/error", status: :unprocessable_entity
    end
  end

  # DELETE /api/favorites/1.json
  def destroy
    @api_favorite.destroy
    render json: @api_favorite
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_favorite
      @api_favorite = Api::Favorite.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_favorite_params
      params.require(:favorite).permit(:author_id, :project_id)
    end
end
