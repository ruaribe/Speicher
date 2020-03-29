Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  resources :photo_books, only: [:index, :create, :update,:delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
