(function () {

  Ombuds.Collections.HotIssues = Backbone.Collection.extend({
  
    model: Ombuds.Models.Issue,

    url: '/tuhermana',

  fetch: function (options) {
    this.reset([]);

   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011' , id: 1}));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 2 }));

    setTimeout(options.success, 2000);
  }

  
  });

}());
