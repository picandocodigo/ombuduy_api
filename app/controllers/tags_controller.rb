class TagsController < ApplicationController

  def index
    render :json => Tag.all
  end

  def issues
    render :json => Tag.find(params[:id]).issues
  end

end
