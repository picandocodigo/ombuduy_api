(function () {

  Ombuds.Models.Issue = Backbone.Model.extend({
    
    urlRoot: '/issues/',

    initialize: function () {
      this.replies = new Ombuds.Collections.IssueReplies();
      this.replies.url = '/issues/' + this.id + '/replies';

      this.activity = new Ombuds.Collections.IssueActivity();
      this.activity.url = 'sisis';

      this.pictures = new Ombuds.Collections.IssuePictures();
      this.pictures.url = '/issues/' + this.id + '/pictures';
    }
  
  });

}());
