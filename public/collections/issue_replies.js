(function () {

  Ombuds.Collections.IssueReplies = Backbone.Collection.extend({

    model: Ombuds.Models.IssueReply,

    fetch: function (options) {

      this.reset([]);

      this.add(new Ombuds.Models.IssueReply({ content: 'Yo lo vi! Es verdad! +1 gente!!! Esto esta roto hace tiempo!', author: 'federico', date: '20 de Enero de 2012' }));
      this.add(new Ombuds.Models.IssueReply({ content: 'Yo lo vi! Es verdad! +1 gente!!! Esto esta roto hace tiempo!', author: 'federico', date: '20 de Enero de 2012' }));
      this.add(new Ombuds.Models.IssueReply({ content: 'Yo lo vi! Es verdad! +1 gente!!! Esto esta roto hace tiempo!', author: 'federico', date: '20 de Enero de 2012' }));
      this.add(new Ombuds.Models.IssueReply({ content: 'Yo lo vi! Es verdad! +1 gente!!! Esto esta roto hace tiempo!', author: 'federico', date: '20 de Enero de 2012' }));
      this.add(new Ombuds.Models.IssueReply({ content: 'Yo lo vi! Es verdad! +1 gente!!! Esto esta roto hace tiempo!', author: 'federico', date: '20 de Enero de 2012' }));
      setTimeout(options.success, 1000);
    }

  });

}());
