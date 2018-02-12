Rails.application.routes.draw do


  get '/login' => 'admin/sessions#index'
  get '/logout' => 'admin/sessions#destroy'

  namespace :admin do

    resources :dashboard, only: [:index]
    resources :settings, only: [:new, :create, :edit, :update]
    resources :posts
    resources :tags, except: [:index]
    resources :sessions, only: [:index, :create, :destroy]
    resources :moderators, only: [:index, :edit, :update]

  end

end
