(function () {

  Ombuds.Views.IssueListView = Backbone.View.extend({
  
    template: 'templates/issue_list.html',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      $.renderTemplate(this, {
        issues: this.collection.models
      });
    },

    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.collection.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        }
      });
    }
  
  });

}());
