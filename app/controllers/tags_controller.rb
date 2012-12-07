class TagsController < ApplicationController

  def show
    render :json => Tag.find(params[:id])
  end

  def index
    render :json => Tag.all
  end

  def issues
    render :json => Tag.find(params[:id]).issues.order('created_at DESC')
  end

  def unfixed
    render :json => Tag.find(params[:id]).issues.where('unfixed IS NULL').order('relevance DESC')
  end

  def navigation
    render :json => Tag.where(:navigation => 1)
  end

end
