OmbuduyApi::Application.routes.draw do

  root :to => 'home#index'

  resources :issues do
    collection do
      get :hot
      get :fixed
    end
    member do
      get :replies
      get :pictures
      get :activity
      get 'fix'
      get 'unfix'
    end
  end

  resources :tags do
    collection do
      get :navigation
    end
    member do
      get :issues
      get :unfixed
    end
  end

  post 'twitter/new' => 'twitter#new'
  post 'twitter/reply' => 'twitter#reply'
  post 'twitter/rt' => 'twitter#rt'
end
