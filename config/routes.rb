Rails.application.routes.draw do

  default_url_options({host:'localhost:3000'})

  devise_for :users,
  defaults: { format: :json },
  path: '',
  path_names: {
    sign_in: 'api/login',
    sign_out: 'api/logout',
    registration: 'api/signup'
  },
  controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }


  scope '/api', defaults: { format: :json } do
    resources :courses
    resources :rooms
    resources :training_sessions
    resources :categories
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index]
  end


  root to:"pages#index"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
