(function () {

  Ombuds.Views.IssueShowPicturesView = Backbone.View.extend({
  
    template: 'templates/issue_show_pictures.html',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      $.renderTemplate(this, {
        pictures: this.model.pictures.models
      });
    },
  
    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.model.pictures.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        }
      });
    }
  
  });

}());
