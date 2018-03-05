var map;
var markers = [];

//this is an array containg info of all the markers
markers = [{
        title: "Domino's Pizza",
        lat: 30.137324,
        lng: 77.289942,
        Address: "Ground Floor, B-6/403, Plot No. 4,<br> Model Town Market,<br> Opposite Nehru Park,<br> Sarojini Colony, Model Town,<br> Yamuna Nagar",
        url: "dominos.co.in",
        id: "nav0",
        visible: ko.observable(true),
        test: true,
        venueid:"51b364c8498e2f0af759e210"
    },
    {
        title: "Subway",
        lat: 30.137987,
        lng: 77.2908973,
        Address: "524-A Gobindupuri Road <br>, Model Town, Krishna Colony,<br> Prem Colony, Yamuna Nagar",
        url: "subway.co.in",
        id: "nav1",
        visible: ko.observable(true),
        test: true,
        venueid:"4e283d57bd41172e17d64793"
    },
    {
        title: "Multani Fast Food",
        lat: 30.1276648,
        lng: 77.2893536,
        Address: "Jagadhri Road, State Highway 6 ,<br>Prem Nagar, Rampura Industrial<br>Area, Yamuna Nagar",
        url: "",
        id: "nav2",
        visible: ko.observable(true),
        test: true,
        venueid:"502220d0e4b0088626966e0c"
    },
    {
        title: "Deepak Bakers",
        lat: 30.1308012,
        lng: 77.2902453,
        Address: "State Highway 6,<br> , Yamuna Nagar",
        url: "deepakbakers.com",
        id: "nav3",
        visible: ko.observable(true),
        test: true,
        venueid:"50d85c2ae4b0afbc236cfffb"
    },
    {
        title: "Sagar Ratna",
        lat: 30.134892,
        lng: 77.289212,
        Address: "NG Mall, 29-C, Model Town,<br> Krishna Colony,<br> Model Town, Jagadhri",
        url: "sagarratna.in",
        id: "nav4",
        visible: ko.observable(true),
        test: true,
        venueid:"4f082dc1e4b0e8907a46f8a5"
    },
];
var i=0;

// Maps api asynchronous load code here.
function addScript( url, callback ) {
    var script = document.createElement( 'script' );
    if( callback ) script.onload = callback;
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild( script );
}
//this function is called when error occurs while loading the google map
var googleError = function() {
	alert('Error connecting to Google Maps. Please try again later.');
};

//this function is called when the map loads
function initMap() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(30.135337, 77.290306),

    };
    if($(window).width() <= 1080) {
        mapOptions.zoom = 13;
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
    markPosition(markers,i);

}

//this sets the map
function setMap(markers,i) {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].test === true) {
            markers[i].placeMarker.setMap(map);
        } else {
            markers[i].placeMarker.setMap(null);
        }
    }
}

var infowindow = null;
//this places the markers at all the locations
function markPosition(location,i) {
  if(i === undefined)
    i = 0;

  if(i>=5) return;


        var clientId = 'LQXNE1PAKBVCG4E3KI3OHTF2GG1EZ425S2RF4LGCZGAF1VLP';
        var clientSecret = '2U0VAS4KNR1VJEQDZPRLEDET5PETL1WBKUMDTXWZ4VM0XKCJ';
        var apiEndpoint = 'https://api.foursquare.com/v2/venues/';
        var version = '20160614';
        var intent = 'match';

        // ajax request to foursquare
        //***error likes comes to be undefined
        $.ajax({
          url: 'https://api.foursquare.com/v2/venues/' + markers[i].venueid +
          '?client_id=LQXNE1PAKBVCG4E3KI3OHTF2GG1EZ425S2RF4LGCZGAF1VLP&client_secret=2U0VAS4KNR1VJEQDZPRLEDET5PETL1WBKUMDTXWZ4VM0XKCJ&v=20160614',
          dataType: "json",
          // async: false,
          success: function(result){
            console.log(apiEndpoint + markers[i].venueid + '?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=' + version);
            var result1  = result.response.venue;
            if(result1.hasOwnProperty('likes')){
              marker.likes = result1.likes.summary;
              console.log(marker.likes);
            }
            else{
              marker.likes = "";
            }

              y(location,i);
              i++;
              markPosition(location,i);


          },
          error: function(err) {
            alert("error in ajax request to foursquare:", err);
          }
        });
        //placing content in the infoWindow
        function y(location,i){
        location[i].placeMarker = new google.maps.Marker({
            position: new google.maps.LatLng(location[i].lat, location[i].lng),
            map: map,
            title: location[i].title,
            animation: google.maps.Animation.DROP
        });
        location[i].contentString = location[i].title + '</strong><br><p>' +
            location[i].Address +
            '<br></p> <p><strong> Likes: ' + marker.likes +' </strong><p><br><a class="web-links" href="http://' +
            location[i].url +'" target="_blank">' + location[i].url + '</a>';

        infowindow = new google .maps.InfoWindow({
            content: location[i].contentString
        });

        //this opens the infowindow on Click on the marker
        new google.maps.event.addListener(location[i].placeMarker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(location[i].contentString);
                infowindow.open(map, this);
                var windowWidth = $(window).width();
                if(windowWidth > 1080) {
                    map.setZoom(16);
                }
                else if(windowWidth <= 1080) {
                    map.setZoom(14);
                }
                map.setCenter(marker.getPosition());
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                  setTimeout(function(){ marker.setAnimation(null);}, 700);
                }
            };
        })(location[i].placeMarker, i));

      }
        //this opens infowindow when we click on nav



}

//Query through the different locations from nav bar with knockout.js.only display markers and nav elements that match query result
var viewModel = {
          query: ko.observable(''),
    marker: ko.observableArray(markers),
//***error here the info window doesnot load and the marker doesnot animate as the infowindow and marker are not declared in this scope***
    clickHandlerFunction: function(location) {
              infowindow.setContent(location.contentString);
              infowindow.open(map, location.placeMarker);
              map.setZoom(16);
              location.placeMarker.setAnimation(google.maps.Animation.BOUNCE);
              setTimeout(function(){ location.placeMarker.setAnimation(null);}, 700);
              map.setCenter(location.placeMarker.getPosition());
    }
};

viewModel.visible = ko.observable(true);

viewModel.markers = ko.dependentObservable(function() {
    var self = this;
    var search = self.query().toLowerCase();
    viewModel.openWindow= function(location){



};
    return ko.utils.arrayFilter(markers, function(marker) {
        if (marker.title.toLowerCase().indexOf(search) >= 0) {
            marker.test = true;
            return marker.visible(true);
        } else {
            marker.test = false;
            setMap(markers,i);
            return marker.visible(false);
        }
    });

}, viewModel);

ko.applyBindings(viewModel);
function check() {
  setMap(markers,i);
    }
