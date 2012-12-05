OmbuduyApi::Application.routes.draw do

  root :to => 'home#index'

  resources :issues do
    collection do
      get :hot
    end
    member do
      get :replies
      get :pictures
      get 'fix'
      get 'unfix'
    end
  end

  resources :tags do
    member do
      get :issues
    end
  end

  post 'twitter/new' => 'twitter#new'
  post 'twitter/reply' => 'twitter#reply'
  post 'twitter/rt' => 'twitter#rt'
end
