(function () {

  Ombuds.Views.TagListView = Backbone.View.extend({
  
    template: 'templates/tag_list.html',

    initialize: function () {
      _.bindAll(this, 'render', 'fetch');
      this.collection = new Ombuds.Collections.Tags();
      this.fetch();
    },

    render: function () {
      $.renderTemplate(this, {
        tags: this.collection.models
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
          setTimeout(that.fetch, 5000);
        }
      });
    }
  
  });

}());
