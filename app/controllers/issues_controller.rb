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
    @issues = Issue.order('created_at DESC').page(params[:page]).per(20)
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
    issue = Issue.update_attributes(params["issue"])
    respond_to do |format|
      format.html
      format.json { render json: issue }
    end
  end

  def destroy
    #Podemos hacer que esto sea solo con rol admin
    render status: 405
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

  def hot
    render json: Issue.order('relevance DESC').limit(2)
  end

end
