(function () {

  Ombuds.Collections.HotIssues = Backbone.Collection.extend({
  
    model: Ombuds.Models.Issue,

    url: '/issues/hot',
 
  });

}());
