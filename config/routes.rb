Rails.application.routes.draw do
  root to:"static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:index, :edit]
    resource :session, only: [:new, :create, :destroy, :show]
    resources :projects, except: [:edit] do
      get "search", on: :collection
      resources :steps
    end
    patch "projects/:project_id/steps/:id/order", to:"steps#changeOrder"
    resources :pictures
    resources :favorites, except: [:new, :edit]
  end
end
