const kaart = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([5.24, 52.26]),
        zoom: 7
    })
});

// styling
let pointStyling = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({
            color: "red"
        }),
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 2,
        })
    })
})


// punt Nathan thuis
// const nathanHome = new ol.layer.Vector({
//     source: new ol.source.Vector({
//         features: [
//             new ol.Feature({
//                 geometry: new ol.geom.Point(
//                     ol.proj.fromLonLat([4.7705690999999995, 52.673312499999994])
//                 )
//             })
//         ]
//     })
// });



// mijn locatie
navigator.geolocation.getCurrentPosition(getMyLocation);

function getMyLocation(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;

    console.log('long ', long, 'lat ', lat)

    let myPosition = new ol.layer.Vector({
        style: pointStyling,
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(
                        ol.proj.fromLonLat([long, lat])
                    )
                })
            ]
        })
    });

    kaart.addLayer(myPosition)


}