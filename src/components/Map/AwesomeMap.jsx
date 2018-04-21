import React, { Component } from "react";

// function setUpCustomZooming(map) {

//     // create several circles to denote cities' population
//     var clevelandCircle = new window.H.map.Circle(
//         new window.H.geo.Point(41.4822, -81.6697), //center
//         11703, // Radius proportional to 390,113 population
//         { style: { fillColor: 'rgba(0, 255, 221, 0.66)' } }
//     );
//     var torontoCircle = new window.H.map.Circle(
//         new window.H.geo.Point(43.7000, -79.4000), //center
//         75090, // Radius proportional to 2.503 million population
//         { style: { fillColor: 'rgba(0, 255, 221, 0.66)' } }
//     );
//     var chicagoCircle = new window.H.map.Circle(
//         new window.H.geo.Point(41.8369, -87.6847), //center
//         81570, // Radius proportional to 2.719 million population
//         { style: { fillColor: 'rgba(0, 221, 255, 0.66)' } }
//     );
//     var newYorkCircle = new window.H.map.Circle(
//         new window.H.geo.Point(40.7127, -74.0059), //center
//         252180, // Radius proportional to 8.406 million population
//         { style: { fillColor: 'rgba(221, 0, 255, 0.66)' } }
//     );


//     // define maximum zoom level for each circle
//     clevelandCircle.setData({ maxZoom: 7 });
//     torontoCircle.setData({ maxZoom: 5 });
//     chicagoCircle.setData({ maxZoom: 5 });
//     newYorkCircle.setData({ maxZoom: 4 });

//     // create container for objects
//     var container = new window.H.map.Group({
//         objects: [clevelandCircle, torontoCircle, chicagoCircle, newYorkCircle]
//     });

//     // use the event delegation to handle 'tap' events on objects
//     container.addEventListener('tap', function (evt) {
//         var target = evt.target;
//         // retrieve maximum zoom level
//         var maxZoom = target.getData().maxZoom;
//         // calculate best camera data to fit object's bounds
//         var cameraData = map.getCameraDataForBounds(target.getBounds());

//         // we set new zoom level taking into acount 'maxZoom' value
//         map.setZoom(Math.min(cameraData.zoom, maxZoom), true);
//         map.setCenter(cameraData.position, true);
//     });

//     // add objects to the map
//     map.addObject(container);
// }

// function addMarkersToMap(map) {
//     var parisMarker = new window.H.map.Marker({ lat: 48.8567, lng: 2.3508 });
//     map.addObject(parisMarker);

//     var romeMarker = new window.H.map.Marker({ lat: 41.9, lng: 12.5 });
//     map.addObject(romeMarker);

//     var berlinMarker = new window.H.map.Marker({ lat: 52.5166, lng: 13.3833 });
//     map.addObject(berlinMarker);

//     var madridMarker = new window.H.map.Marker({ lat: 40.4, lng: -3.6833 });
//     map.addObject(madridMarker);

//     var londonMarker = new window.H.map.Marker({ lat: 51.5008, lng: -0.1224 });
//     map.addObject(londonMarker);
// }





class AwesomeMap extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    addMarkerToGroup = (group, coordinate, html, radius, color) => {
        
        //var marker = new window.H.map.Marker(coordinate);
        var marker = new window.H.map.Circle(
            new window.H.geo.Point(coordinate.lat, coordinate.lng), //center
            radius, // Radius proportional to 2.719 million population
            { style: { fillColor: color } }
        );

        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
    }
    componentDidMount = () => {
        console.log(this.myRef)
        var platform = new window.H.service.Platform({
            'app_id': 'NsjvkdO6HINUXCU1xAwV',
            'app_code': 'rvodtjJNT8Ywk8Bnp-Hxbw'
        });
        var defaultLayers = platform.createDefaultLayers();
        var maptypes = platform.createDefaultLayers();
        // add objects to the map
        var map = new window.H.Map(this.myRef.current, defaultLayers.normal.map, {
            // initial center and zoom level of the map
            center: new window.H.geo.Point(36.445138, 37),
            zoom: 4
        });
        // use the event delegation to handle 'tap' events on objects

        // Add map events functionality to the map

        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
        var ui = window.H.ui.UI.createDefault(map, defaultLayers);
        //console.log(ui)
        var group = new window.H.map.Group();

        map.addObject(group);

        // add 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', function (evt) {
            // event target is the marker itself, group is a parent event target
            // for all objects that it contains
           
            var bubble = new window.H.ui.InfoBubble(evt.target.getCenter(), {
                // read custom data
                content: evt.target.getData()
            });
            

            // show info bubble
            ui.addBubble(bubble);
        }, false);

        var factor = 7;
        this.addMarkerToGroup(group, { lat: 31.371484, lng: 34.324140 },
            '<div><a href=\'http://www.mcfc.co.uk\' >NCCR GAZA</a>' +
            '</div><div >Wheelchairs for Gaza children with disabilities<br>Goal: 25000 euros</div>',25000*factor, '#ff5452');

        this.addMarkerToGroup(group, { lat: 35.646856, lng: 36.759310 },
            '<div ><a href=\'http://www.liverpoolfc.tv\' >IHCRO RELIEF</a>' +
            '</div><div >Orphan Sponsorship<br>Goal: 50000 euros</div>',50000*factor,'#ff5452');

        this.addMarkerToGroup(group, { lat: 36.445138, lng: 37.602091 },
            '<div ><a href=\'http://www.liverpoolfc.tv\' >The Center for Global Affairs (CGA) at New York University’s School of Professional Studies</a>' +
            '</div><div >IRAQ RE:CODED<br>Goal: 35000 euros</div>',35000*factor,'#ff8785');

        this.addMarkerToGroup(group, { lat: 31.991877, lng: 35.306682 },
            '<div ><a href=\'http://www.liverpoolfc.tv\' >Build Palestine</a>' +
            '</div><div >LARP in Palestine: challenge reality with fiction<br>Goal: 29000 euros</div>',29000*factor,'#ff8785');

        this.addMarkerToGroup(group, { lat: 18.425110, lng: -67.152831 },
            '<div ><a href=\'http://www.liverpoolfc.tv\' >Isabel Rullán</a>' +
            '</div><div >Maria: Puerto Rico Real-Time Recovery Fund<br>Goal: 100000 euros</div>',100000*factor,'#b23a39');
        //addMarkersToMap(map);
        //setUpCustomZooming(map)
    }

    render() {


        // var map = new window.H.Map(
        //     this.myRef.current,
        //     maptypes.normal.map);
        //     var bbox = new window.H.geo.Rect(42.3736, -71.0751, 42.3472, -71.0408);
        //     map.setViewBounds(bbox);


        return (
            <div style={{ height: 1000, width: 1000 }} ref={this.myRef} > </div>
        );
    }
}

export default (AwesomeMap);