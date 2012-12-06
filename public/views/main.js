(function () {

  Ombuds.Views.MainView = Backbone.View.extend({
  
    initialize: function () {
      this.hotIssuesView = new Ombuds.Views.HotIssuesView({
        el: $('#hot-issue-list')
      });
      this.tagListView = new Ombuds.Views.TagListView({
        el: $('#tag-list')
      });
      this.issueListView = new Ombuds.Views.IssueListView({
        el: $('#issue-list')
      });
      this.issueShowView = new Ombuds.Views.IssueShowView({
        el: $('#issue-show')
      });
    },

    showIssueList: function (title, collection) {
      this.issueShowView.$el.hide();
      this.issueListView.$el.show();
      this.issueListView.title = title;
      this.issueListView.collection = collection;
      this.issueListView.fetch();
    },

    showIssue: function (model) {
      this.issueListView.$el.hide();
      this.issueShowView.$el.show();
      this.issueShowView.model = model;
      this.issueShowView.fetch();
    },

    showTag: function (tag) {
      var that = this;
      that.issueShowView.$el.hide();
      that.issueListView.$el.show();
      that.issueListView.title = tag.name;
      that.issueListView.collection = tag.issues;
      that.issueListView.fetch(function () {
        that.issueListView.setTitle('');
        tag.fetch({
          success: function () {
            that.issueListView.setTitle(tag.get('name'));
          }
        });
      });


    }

  });

}());
