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


const laag = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([4.35247, 50.84673])
                )
            })
        ]
    })
});

kaart.addLayer(laag)