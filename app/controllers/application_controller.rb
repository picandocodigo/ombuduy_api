class ApplicationController < ActionController::Base
  protect_from_forgery

  #before_filter :sleep_it

  def sleep_it
    sleep 0.5
  end
end
