(function () {

  Ombuds.Views.IssueShowMapView = Backbone.View.extend({

    template: 'templates/issue_show_map.html',

    render: function (model) {
      $.renderTemplate(
        this,
        {
          issue: this.model
        },
        function () {
          map = new OpenLayers.Map("issue_show_map_frame");
            map.addLayer(new OpenLayers.Layer.OSM());
            // TODO: AGARRAR STRING CON LAS COSAS DEL MODEL:
            var lonLat = new OpenLayers.LonLat("-56.1593298", "-34.9121501")
              .transform(
                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                map.getProjectionObject() // to Spherical Mercator Projection
              );
  
          var zoom=16;
  
          var markers = new OpenLayers.Layer.Markers( "Markers" );
          map.addLayer(markers);
  
          markers.addMarker(new OpenLayers.Marker(lonLat));
  
          map.setCenter (lonLat, zoom);
        }
      );
    }

  });

}());
