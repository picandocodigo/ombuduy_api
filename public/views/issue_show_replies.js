(function () {

  Ombuds.Views.IssueShowRepliesView = Backbone.View.extend({
  
    template: 'templates/issue_show_replies.html',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      $.renderTemplate(this, {
        replies: this.model.replies.models
      });
    },

    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.model.replies.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        }
      });
    }
  
  });

}());
