class Api::PicturesController < ApplicationController
  before_action :set_api_picture, only: [:show, :edit, :update, :destroy]

  # GET /api/pictures.json
  def index
    @api_pictures = Api::Picture.all
  end

  # GET /api/pictures/1.json
  def show
  end

  # GET /api/pictures/new
  def new
    @api_picture = Api::Picture.new
  end

  # GET /api/pictures/1/edit
  def edit
  end

  # POST /api/pictures.json
  def create
    @api_picture = Api::Picture.new(api_picture_params)

    if @api_picture.save
      format.json { render :show, status: :created, location: @api_picture }
    else
      @errors = @api_picture.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # PATCH/PUT /api/pictures/1.json
  def update
    if @api_picture.update(api_picture_params)
      format.json { render :show, status: :ok, location: @api_picture }
    else
      @errors = @api_picture.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  # DELETE /api/pictures/1.json
  def destroy
    @api_picture.destroy
    format.json { head :no_content } #TODO
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_picture
      @api_picture = Api::Picture.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_picture_params
      params.require(:picture).permit(:imageable_id, :imageable_type, :picture_url)
    end


end
