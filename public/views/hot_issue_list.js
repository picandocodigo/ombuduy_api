(function () {

  Ombuds.Views.HotIssuesView = Backbone.View.extend({
  
    template: 'templates/hot_issues_list.html',

    initialize: function () {
      _.bindAll(this, 'render', 'fetch');
      this.collection = new Ombuds.Collections.HotIssues();
      this.fetch();   
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
      that.collection.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
          setTimeout(that.fetch, 5000);
        }
      });
    }
  
  });

}());
