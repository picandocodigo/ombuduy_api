(function () {

  Ombuds.Routers.IssuesRouter = Backbone.Router.extend({
  
    initialize: function () {
      this.mainView = new Ombuds.Views.MainView({
        el: $(document.body),
        tags: new Ombuds.Collections.Tags(),
        issues: new Ombuds.Collections.Issues(),
        hot_issues: new Ombuds.Collections.HotIssues()
      });
      this.mainNav = new Ombuds.Views.MainNavView({
        el: $('#main-nav'),
        collection: new Ombuds.Collections.NavigationTags()
      });
    },

    routes: {
      '': 'hotIssueList',
      'reportes/:id': 'issueShow',
      'categorias/:id': 'tagShow',
      'ultimos': 'issueList',
      'destacados': 'hotIssueList'
    },

    hotIssueList: function () {
      this.mainNav.highlightHot();
      this.mainView.showIssueList('Reportes destacados', new Ombuds.Collections.HotIssues());
    },

    issueList: function () {
      this.mainNav.highlightDate();
      this.mainView.showIssueList('Ultimos reportes', new Ombuds.Collections.Issues());
    },

    issueShow: function (issue_id) {
      this.mainNav.fetch();
      this.mainView.showIssue(new Ombuds.Models.Issue({ id: issue_id }));
    },

    tagShow: function (id) {
      this.mainNav.highlightTag(id);
      this.mainView.showTag(new Ombuds.Models.Tag({ id: id, name: 'OSE' }));
    }
  
  });

}());
