(function () {

  Ombuds.Collections.FixedIssues = Backbone.Collection.extend({
  
    model: Ombuds.Models.Issue,

    url: '/issues/fixed',
 
  });

}());
