(function () {

  Ombuds.Views.IssueShowView = Backbone.View.extend({
  
    template: 'templates/issue_show.html',

    events: {
      'click .tabs a[rel=replies]': 'showReplies',
      'click .tabs a[rel=activity]': 'showActivity',
      'click .tabs a[rel=pictures]': 'showPictures',
      'click .tabs a[rel=map]': 'showMap',
      'click a.plus': 'addOne',
      'click a.minus': 'substractOne'
    },

    initialize: function () {
      _.bindAll(this, 'render');
    },
              
    render: function () {
      var that = this;
      $.renderTemplate(
        that,
        {
          issue: this.model
        },
        function () {
          that.repliesView = new Ombuds.Views.IssueShowRepliesView({
            el: that.$el.find('.tabs .replies'),
            model: that.model
          });
          that.activityView = new Ombuds.Views.IssueShowActivityView({
            el: that.$el.find('.tabs .activity'),
            model: that.model
          });
          that.picturesView = new Ombuds.Views.IssueShowPicturesView({
            el: that.$el.find('.tabs .pictures'),
            model: that.model
          });

          that.showMap();
      });
    },

    fetch: function () {
      var that = this
        , loading = 'loading';

      that.$el.addClass(loading);
      this.model.fetch({
        success: function () {
          that.render();
          that.$el.removeClass(loading);
        }
      });
    },

    showReplies: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.replies').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=replies]').addClass('active');
      this.repliesView.fetch();
    },

    showActivity: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.activity').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=activity]').addClass('active');
      this.activityView.fetch();
    },

    showPictures: function () {
      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.pictures').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=pictures]').addClass('active');
      this.picturesView.fetch();        
    },

    showMap: function () {
      if (!!this.model.get('longitude') && !!this.model.get('latitude') && !this.renderedMap) {
        try {
        map = new OpenLayers.Map("issue_map_frame");
        map.addLayer(new OpenLayers.Layer.OSM());
        //-34.878842,-56.076877
        var lonLat = new OpenLayers.LonLat(this.model.get('longitude'), this.model.get('latitude'))
            .transform(
              new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
              map.getProjectionObject() // to Spherical Mercator Projection
            );

        var zoom=16;

        var markers = new OpenLayers.Layer.Markers( "Markers" );
        map.addLayer(markers);

        markers.addMarker(new OpenLayers.Marker(lonLat));

        map.setCenter (lonLat, zoom);

        this.renderedMap = true;
        } catch(e) {} // TODO: Remove map
      }

      this.$el
        .find('.tabs .tab-content').hide()
        .filter('.map').show();
      this.$el
        .find('.tab-buttons a').removeClass('active')
        .filter('[rel=map]').addClass('active');
     
      
    },

    addOne: function () {
      var relevance = parseInt(this.model.get('relevance'), 10) + 1
        , relElem = this.$el.find('.relevance span');

      this.model.save(
        {
          relevance: relevance
        },
        {
          success: function () {
            relElem.html('+ ' + relevance);
          }
        }
      );
      return false;
    },

    substractOne: function () {
      var relevance = parseInt(this.model.get('relevance'), 10) - 1
        , relElem = this.$el.find('.relevance span');

      this.model.save(
        {
          relevance: relevance
        },
        {
          success: function () {
            relElem.html('+ ' + relevance);
          }
        }
      );
      return false;
    }

  });

}());
