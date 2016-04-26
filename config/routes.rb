Rails.application.routes.draw do
  root to:"static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, except: [:index]
    resource :session, only: [:new, :create, :destroy]
  end
end
