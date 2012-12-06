(function () {

  Ombuds.Views.IssueShowView = Backbone.View.extend({
  
    template: 'templates/issue_show.html',

    events: {
      'click a.plus': 'addOne',
      'click a.minus': 'substractOne'
    },

    initialize: function () {
      _.bindAll(this, 'render');
    },
              
    render: function () {
      var that = this;
      $.renderTemplate(
        that,
        {
          issue: this.model
        },
        function () {
          that.repliesView = new Ombuds.Views.IssueShowRepliesView({
            el: that.$el.find('#issue_show_replies'),
            model: that.model
          });
          that.activityView = new Ombuds.Views.IssueShowActivityView({
            el: that.$el.find('#issue_show_activity'),
            model: that.model
          });
          that.picturesView = new Ombuds.Views.IssueShowPicturesView({
            el: that.$el.find('#issue_show_pictures'),
            model: that.model
          });
          that.mapView = new Ombuds.Views.IssueShowMapView({
            el: that.$el.find('#issue_show_map'),
            model: that.model
          });

          that.repliesView.fetch();
          that.activityView.fetch();
          that.picturesView.fetch();
          that.mapView.render(this.model);
      });
    },

    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.model.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        }
      });
    },

    showMap: function () {
      if (!!this.model.get('longitude') && !!this.model.get('latitude') && !this.renderedMap) {
        try {

        this.renderedMap = true;
        } catch(e) {} // TODO: Remove map
      }

      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.map').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=map]').addClass('active');
      
    },

    addOne: function () {
      var that = this
        , relevance = parseInt(this.model.get('relevance'), 10) + 1;

      this.model.save(
        {
          relevance: relevance
        },
        {
          success: function () {
            that.updateRelevance(relevance);
          }
        }
      );
      return false;
    },

    substractOne: function () {
      var that = this
        , relevance = parseInt(this.model.get('relevance'), 10) - 1;

      this.model.save(
        {
          relevance: relevance
        },
        {
          success: function () {
            that.updateRelevance(relevance);
          }
        }
      );
      return false;
    },

    updateRelevance: function (relevance) {
      var relElem = this.$el.find('.relevance span')
        , prefix = relevance >= 0 ? '+' : '';
      relElem.html(prefix + relevance);
    }

  });

}());
