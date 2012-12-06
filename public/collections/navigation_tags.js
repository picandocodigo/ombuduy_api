(function () {

  Ombuds.Collections.NavigationTags = Backbone.Collection.extend({

    model: Ombuds.Models.Tag,

    url: '/tags/navigation'

  });

}());
