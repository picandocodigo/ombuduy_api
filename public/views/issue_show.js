(function () {

  Ombuds.Views.IssueShowView = Backbone.View.extend({
  
    template: 'templates/issue_show.html',

    events: {
      'click .tabs a[rel=replies]': 'showReplies',
      'click .tabs a[rel=activity]': 'showActivity',
      'click .tabs a[rel=pictures]': 'showPictures'
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
            el: that.$el.find('.tabs .replies'),
            model: that.model
          });
          that.activityView = new Ombuds.Views.IssueShowActivityView({
            el: that.$el.find('.tabs .activity'),
            model: that.model
          });
          that.picturesView = new Ombuds.Views.IssueShowPicturesView({
            el: that.$el.find('.tabs .pictures'),
            model: that.model
          });

          that.showReplies();
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

    showReplies: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.replies').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=replies]').addClass('active');
      this.repliesView.fetch();
    },

    showActivity: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.activity').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=activity]').addClass('active');
      this.activityView.fetch();
    },

    showPictures: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.pictures').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=pictures]').addClass('active');
      this.picturesView.fetch();        
    }

  });

}());
