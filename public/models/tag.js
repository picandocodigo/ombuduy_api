(function () {

  Ombuds.Models.Tag = Backbone.Model.extend({
  
    urlRoot: '/tags',

    initialize: function () {
      this.issues = new Ombuds.Collections.Issues();
      this.issues.url = '/tags/' + this.id + '/issues';
    }
  
  });

}());
