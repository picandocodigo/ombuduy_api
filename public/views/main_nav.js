(function () {

  Ombuds.Views.MainNavView = Backbone.View.extend({

    template: 'templates/main_nav.html',

    initialize: function () {
      _.bindAll(this, 'render', 'fetch');
    },

    render: function (callback) {
      $.renderTemplate(this, {
        tags: this.collection.models
      }, callback);
    },
    
    fetch: function (callback) {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading)
      that.collection.fetch({
        success: function () {
          that.render(callback);
          that.$el.removeClass(loading);
        }
      });
    },

    removeHighlights: function () {
      var that = this;
      that.$el.find('a').removeClass('active');
    },

    highlightHot: function () {
      var that = this;
      that.fetch(function () {
        that.removeHighlights();
        that.$el.find('a.hot').addClass('active');
      });
    },

    highlightFixed: function () {
      var that = this;
      that.fetch(function () {
        that.removeHighlights();
        that.$el.find('a.fixed').addClass('active');
      });
    },

    highlightDate: function () {
      var that = this;
      that.fetch(function () {
        that.removeHighlights();
        that.$el.find('a.date').addClass('active');
      });
    },

    highlightTag: function (id) {
      var that = this;
      that.fetch(function () {
        that.removeHighlights();
        that.$el.find('a.tag-' + id).addClass('active');
      });
    }

  });

}());
