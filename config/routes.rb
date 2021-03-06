Rails.application.routes.draw do

  devise_for :users

  devise_scope :user do
    root :to => 'devise/registrations#new'
  end

  resources :homes, only: :index

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :update]
      resources :gyms, only: [:index, :create]
      resources :crags, only: [:index, :create]
    end
  end
end
