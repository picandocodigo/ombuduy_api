class IssuesCell < Cell::Rails

  def unsolved
    @issues = Issue.order("fixed ASC").limit(10)
    render
  end

  def recent
    @issues = Issue.order(:created_at).limit(10)
    render
  end

end
