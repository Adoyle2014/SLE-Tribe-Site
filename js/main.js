/**
 * Created by Adam on 9/21/2015.
 */
$(document).ready(function() {

// Show Map Click Handlers---------------------------
    $("#sle-overall").on('click', function() {
        sleOverallMap.showMap();
    });

    $("#sle-nw").on('click', function() {
        sleNwMap.showMap();
    });

    $("#sle-ne").on('click', function() {
        sleNeMap.showMap();
    });

    $("#sle-se").on('click', function() {
        sleSeMap.showMap();
    });

    $("#sle-sw").on('click', function() {
        sleSwMap.showMap();
    });

    $("#tfr-overall").on('click', function() {
        tfrOverallMap.showMap();
    });

    $("#tfr-nw").on('click', function() {
        tfrNwMap.showMap();
    });

    $("#tfr-ne").on('click', function() {
        tfrNeMap.showMap();
    });

    $("#tfr-se").on('click', function() {
        tfrSeMap.showMap();
    });

    $("#tfr-sw").on('click', function() {
        tfrSwMap.showMap();
    });

//Zoom map click handlers-----------------------------
    $(".territory-maps").on('click', '.map', function() {
        var target = $(this).children("img").attr("src");
        window.open(target);
    })


});

var sleOverallMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/d60f6581515f6780eabd4b4fb195d191/", "#sle-map-title", "Overall Positions", "#sle-maps");

var sleNwMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/b71f46fbb534a501d0233f1f8dfd4d97/", "#sle-map-title", "Northwest Territories", "#sle-maps");

var sleNeMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/15523059eac02bcf5923460ec4ad1d33/", "#sle-map-title", "Northeast Territories", "#sle-maps");

var sleSeMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/179d850234a03dc1f6735baa2e5186b9/", "#sle-map-title", "Southeast Territories", "#sle-maps");

var sleSwMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/0bf2e843558bb2f17529ec3ea70722ae/", "#sle-map-title", "Southwest Territories", "#sle-maps");


var tfrOverallMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/c1eb0ae8a07ae89f930cc5be8be62dd6/", "#tfr-map-title", "Overall Positions", "#tfr-maps");

var tfrNwMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/53710aea84f6e3440db346ebf85c2714/", "#tfr-map-title", "Northwest Territories", "#tfr-maps");

var tfrNeMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/5cc7a49988667c7989a24d2a6a6f747c/", "#tfr-map-title", "Northeast Territories", "#tfr-maps");

var tfrSeMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/ab205caf05c481edab1d6b53f4fb8c12/", "#tfr-map-title", "Southeast Territories", "#tfr-maps");

var tfrSwMap = new mapView("http://www.tw2-tools.com/us9/img_map/hash/a8fe5368a53ce85c86a67b2e94cd6ed6/", "#tfr-map-title", "Southwest Territories", "#tfr-maps");



function mapView(url, titleDiv, title, mapDiv) {

    this.url = url;
    this.titleDiv = titleDiv;
    this.title = title;
    this.mapDiv = mapDiv;

    this.showMap = function() {
        $(titleDiv).html(title);
        $(mapDiv).html('<img src="' + url + '">');
    }
}


