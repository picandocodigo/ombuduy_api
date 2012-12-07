(function () {

  Ombuds.Views.IssueListView = Backbone.View.extend({
  
    template: 'templates/issue_list.html',

    initialize: function (options) {
      _.bindAll(this, 'render', 'fetch');
      this.title = options.title;
    },

    render: function () {
      $.renderTemplate(this, {
        title: this.title,
        issues: this.collection.models
      });
      this.setTitle(this.title);
    },

    fetch: function (callback) {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.collection.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
          
          clearTimeout(that.timeoutId);
          that.timeoutId = setTimeout(that.fetch, 20000);

          if (typeof callback === 'function') {
            callback();
          }
        }
      });
    },

    setTitle: function (title) {
      $('title').html(Ombuds.AppName + ' - ' + title);
      this.$el.find('h1').html(title);
    }
  
  });

}());
