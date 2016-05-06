Rails.application.routes.draw do
  root to:"static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :user, except: [:index]
    resource :session, only: [:new, :create, :destroy, :show]
    resources :projects do
      get "search", on: :collection
      resources :steps
    end

    resources :pictures
  end
end
