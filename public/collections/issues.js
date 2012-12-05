(function () {

  Ombuds.Collections.Issues = Backbone.Collection.extend({
  
    model: Ombuds.Models.Issue,

    url: '/tuherman',

  fetch: function (options) {
   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011' , id: 1}));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 2 }));
   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011', id: 3 }));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 4 }));
   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011', id: 5 }));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 6 }));
   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011', id: 7 }));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 8 }));
   this.add(new Ombuds.Models.Issue({ title: 'Ahora este tiene que tener un texto un poco mas largo para que aparezca mejor el issue... Fijate a ver ahora...', relevance: 12, date: '27 de Diciembre de 2011', id: 9 }));
   this.add(new Ombuds.Models.Issue({ title: 'Hay un canio roto en la esquina de mi casa vive una piba que por cinco mangos te chupa la pinga.', relevance: 20, date: '15 de Enero de 2012', id: 10 }));


    setTimeout(options.success, 1000);
  }
  
  });

}());
