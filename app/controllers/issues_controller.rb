class IssuesController < ApplicationController
  def new
  end

  def create
    issue = Issue.create(params["issue"])
    respond_to do |format|
      format.html
      format.json { render json: issue }
    end
  end

  def show
    @issue = Issue.find(params["id"])
    respond_to do |format|
      format.html
      format.json { render json: @issue }
    end
  end

  def index
    @issues = Issue.order('created_at DESC').limit(30)
    respond_to do |format|
      format.html
      format.json{
        render json: @issues
      }
    end
  end

  def edit
  end

  def update
    issue = Issue.find(params[:id]).update_attributes(params["issue"])
    respond_to do |format|
      format.html
      format.json { render json: issue }
    end
  end

  def destroy
    #Podemos hacer que esto sea solo con rol admin
    render status: 405
  end

  def hot
    render json: Issue.where('fixed_by IS NULL').order('relevance DESC').limit(30)
  end

  def fixed
    render json: Issue.where('fixed_by IS NOT NULL').order('created_at DESC').limit(30)
  end

  def replies
    render json: Issue.find(params[:id]).replies
  end
  
  def pictures
    pictures = []
    picture = Issue.find(params[:id]).image_url
    unless picture.nil?
      pictures << {image_url: picture}
    end
    render json: pictures
  end

  def activity
    issue = Issue.find(params[:id])
    activity = []
    activity << {
      author: 'banafederico',
      action: 'creo el reporte',
      date: issue.created_at
    }
    render json: activity
  end

  def fix
    # TODO clean variables, control save action
    issue = Issue.find(params["id"])
    issue.fixed += 1
    issue.save
    redirect_to issue
  end

  def unfix
    issue = Issue.find(params["id"])
    issue.fixed -= 1
    issue.save
    redirect_to issue
  end

end
