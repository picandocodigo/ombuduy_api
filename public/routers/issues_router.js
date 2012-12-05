(function () {

  Ombuds.Routers.IssuesRouter = Backbone.Router.extend({
  
    initialize: function () {
      this.mainView = new Ombuds.Views.MainView({
        el: $(document.body),
        tags: new Ombuds.Collections.Tags(),
        issues: new Ombuds.Collections.Issues(),
        hot_issues: new Ombuds.Collections.HotIssues()
      });
    },

    routes: {
      '': 'issueList',
      'reportes/:id': 'issueShow',
      'categorias/:id': 'tagShow'
    },

    issueList: function () {
      this.mainView.showIssueList(new Ombuds.Collections.Issues());
    },

    issueShow: function (issue_id) {
      this.mainView.showIssue(new Ombuds.Models.Issue({ id: issue_id }));
    },

    tagShow: function (id) {
      this.mainView.showTag(new Ombuds.Models.Tag({ id: id, name: 'OSE' }));
    }
  
  });

}());
