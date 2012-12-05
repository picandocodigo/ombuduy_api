(function () {

  Ombuds.Collections.Issues = Backbone.Collection.extend({
  
    model: Ombuds.Models.Issue,

    url: '/issues',
  
  });

}());
