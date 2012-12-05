(function () {

  Ombuds.Models.Issue = Backbone.Model.extend({
    
    url: '/tuhermana_issue',

    initialize: function () {
      this.replies = new Ombuds.Collections.IssueReplies();
      this.replies.url = 'sisisi';

      this.activity = new Ombuds.Collections.IssueActivity();
      this.activity.url = 'sisis';

      this.pictures = new Ombuds.Collections.IssuePictures();
      this.pictures.url = 'sisis';
    },

  fetch: function (options) {
           setTimeout(options.success, 1000);
         }
  
  });

}());
