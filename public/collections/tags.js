(function () {

  Ombuds.Collections.Tags = Backbone.Collection.extend({
  
    model: Ombuds.Models.Tag,

    url: '/tuhermana',

    fetch: function (options) {
      this.reset([]);

      this.add(new Ombuds.Models.Tag({ name: 'OSE', id: 1}));
      this.add(new Ombuds.Models.Tag({ name: 'UTE', id: 2 }));
      this.add(new Ombuds.Models.Tag({ name: 'IMM', id: 3 }));
      this.add(new Ombuds.Models.Tag({ name: 'IMC', id: 4 }));

      setTimeout(options.success, 1000);
    }
  
  });

}());
