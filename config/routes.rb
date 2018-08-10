Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # =================================================
  #             ROUTES FOR LOCATION MODEL
  # =================================================
  get '/locations', to: 'locations#index'
  get '/locations/:id', to: 'locations#show'
  post '/locations', to: 'locations#create'
  delete '/locations/:id', to: 'locations#delete'
  put '/locations/:id', to: 'locations#update'

end
