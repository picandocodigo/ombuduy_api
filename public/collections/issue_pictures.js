(function () {

  Ombuds.Collections.IssuePictures = Backbone.Collection.extend({
  
    model: Ombuds.Models.IssuePicture,

    fetch: function (options) {
      this.reset([])


    this.add(new Ombuds.Models.IssuePicture({ author: 'martinloy', image_url: 'images/pipe1.jpg' }));
    this.add(new Ombuds.Models.IssuePicture({ author: 'picandocodigo', image_url: 'images/pipe2.jpg' }));
    this.add(new Ombuds.Models.IssuePicture({ author: 'diegoakira', image_url: 'images/pipe3.jpg' }));
    
    setTimeout(options.success, 1000);
    }
  
  });

}());
