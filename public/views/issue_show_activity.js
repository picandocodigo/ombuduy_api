(function () {

  Ombuds.Views.IssueShowActivityView = Backbone.View.extend({
  
    template: 'templates/issue_show_activity.html',

    render: function () {
      $.renderTemplate(this, {
        activities: this.model.activity.models
      });
    },
  
    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      that.model.activity.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        } 
      });
    }  
  
  });

}());
