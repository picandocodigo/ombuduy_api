class TweetsCell < Cell::Rails

  def issue_tweet(args)
    @tweet = Twitter.status(args[:tweet_id])
    render
  end

end
