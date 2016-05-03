class Api::SessionsController < ApplicationController
  def new
  end

  def show
    if current_user
			@api_user = current_user
			render "api/users/show"
		else
			@errors = nil
			render "api/shared/error", status: 404
		end
  end

  def create
    @api_user = Api::User.includes(:picture).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @api_user
      login_user!(@api_user)
      render "api/users/show"
    else
      @errors = ['invalid credentials']
      render "api/shared/error", status: 401
    end
  end

  def destroy
    @api_user = current_user
		if @api_user
			logout!
			render "api/users/show"
		else
			@errors = ['no one logged in']
			render "api/shared/error", status: 404
		end
  end

end
