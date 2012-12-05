(function () {

  Ombuds.Models.Tag = Backbone.Model.extend({
  
    url: '/tuhermana_tag',

    initialize: function () {
      this.issues = new Ombuds.Collections.Issues();
      this.issues.url = '/tags/' + this.id + '/issues';
    }
  
  });

}());
