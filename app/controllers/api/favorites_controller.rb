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
    @api_favorites = Api::Favorite.where(project_id: params[:favorite][:project_id])
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
    format.json { head :no_content } #TODO
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
