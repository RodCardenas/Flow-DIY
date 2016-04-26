class Api::SessionController < ApplicationController
  def new
  end
  
  def create
    user = Api::User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render :new
    else
      login_user!(user)
      render json: user #TODO: Send users to the projects index page upon logging in
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil

    render :new
  end
end
