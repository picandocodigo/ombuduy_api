(function () {

  Ombuds.Collections.IssueActivity = Backbone.Collection.extend({

    model: Ombuds.Models.IssueActivity,

  fetch: function (options) {
    this.reset([]);

    this.add(new Ombuds.Models.IssueActivity({ author: 'banafederico', action: 'creo el reporte', date: '15 de Enero de 2012' }));
    this.add(new Ombuds.Models.IssueActivity({ author: 'picandocodigo', action: 'agrego una foto', date: '15 de Enero de 2012' }));
    this.add(new Ombuds.Models.IssueActivity({ author: 'martinloy', action: 'agrego una foto', date: '15 de Enero de 2012' }));
    this.add(new Ombuds.Models.IssueActivity({ author: 'diegoakira', action: 'agrego una foto', date: '15 de Enero de 2012' }));

   setTimeout(options.success, 1000);
  }

  });

}());
