class TwitterController < ApplicationController

  def new
    if (user = User.where(twitter_user_id: params["user_id"]).first).nil?
      user = User.create(twitter_user_id: params["user_id"].to_i)
    end
    issue = Issue.new(
                      text: params["text"],
                      image_url: params["image_url"],
                      latitude: params["latitude"].to_f,
                      longitude: params["longitude"].to_f,
                      tweet_id: params["tweet_id"],
                      user_id: user.id,
                      author: params["author"]
                      )

    get_tags(params, issue)

    if issue.save
      render json: "/#/reportes/#{issue.id}", status: 201
    else
      render text: "Error", status: 400
    end
  end

  def reply
    unless (issue = give_relevance(params['reply_to_id'])).nil?
      reply = Reply.new(
                        issue_id: issue.id,
                        text: params["message"],
                        tweet_id: params["tweet_id"],
                        user_id: params["user_id"],
                        image_url: params["image_url"],
                        author: params["author"];
                        )

      if reply.save
        render text: "OK", status: 201
      else
        render text: reply.errors, status: 400
      end
    else
      render text: "Error", status: 400
    end
  end

  def rt
    unless (issue = give_relevance(params['tweet_id'])).nil?
      if issue.save
        render text: "OK", status: 201
      else
        render text: issue.errors, status: 400
      end
    else
      render text: "Error", status: 400
    end
  end

  private

  def give_relevance(tweet_id)
    unless (issue = Issue.where(tweet_id: tweet_id).first).nil?
      issue.relevance ||= 0
      issue.relevance += 1
      issue
    end
  end

  def get_tags(params, issue)
    unless params["hashtags"].nil?
      params["hashtags"].each do |hashtag|
        tag = Tag.where(name: hashtag[1]["text"].downcase).first_or_create
        issue.tags << tag
      end
    end
  end

end
