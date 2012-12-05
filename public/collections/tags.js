(function () {

  Ombuds.Collections.Tags = Backbone.Collection.extend({
  
    model: Ombuds.Models.Tag,

    url: '/tags'
  
  });

}());
