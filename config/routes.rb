Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/tests', to: 'tests#index'
    get '/products', to: 'products#index'
    get '/products/category', to: 'products#category'
    get '/products/:category', to: 'products#by_category'

    get '/sellers', to: 'sellers#index'

    get '/sellers_buyers/:id', to: 'buyers#sellers_buyers'
    get '/buyers/:id', to: 'buyers#show'
  
  end
end
