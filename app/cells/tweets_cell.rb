class TweetsCell < Cell::Rails

  def issue_tweet(args)
    begin
      @tweet = Twitter.status(args[:tweet_id])
      render
    rescue Exception
    end
  end

end
