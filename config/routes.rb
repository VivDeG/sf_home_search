Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "api/homes#index"

  namespace :api, defaults: { format: :json } do
    resources :homes, only: [:index]
  end
end
