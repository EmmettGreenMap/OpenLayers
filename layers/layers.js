var wms_layers = [];


    var projection_BackgroundNetherlands_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_BackgroundNetherlands_0 = projection_BackgroundNetherlands_0.getExtent();
    var size_BackgroundNetherlands_0 = ol.extent.getWidth(projectionExtent_BackgroundNetherlands_0) / 256;
    var resolutions_BackgroundNetherlands_0 = new Array(14);
    var matrixIds_BackgroundNetherlands_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_BackgroundNetherlands_0[z] = size_BackgroundNetherlands_0 / Math.pow(2, z);
        matrixIds_BackgroundNetherlands_0[z] = z;
    }
    var lyr_BackgroundNetherlands_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?request=getcapabilities&service=wmts",
    attributions: ' ',
                                "layer": "standaard",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_BackgroundNetherlands_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_BackgroundNetherlands_0),
                resolutions: resolutions_BackgroundNetherlands_0,
                matrixIds: matrixIds_BackgroundNetherlands_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Background Netherlands",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_5kmstraal_2 = new ol.format.GeoJSON();
var features_5kmstraal_2 = format_5kmstraal_2.readFeatures(json_5kmstraal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5kmstraal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5kmstraal_2.addFeatures(features_5kmstraal_2);
var lyr_5kmstraal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5kmstraal_2, 
                style: style_5kmstraal_2,
                popuplayertitle: "5 km straal",
                interactive: false,
                title: '<img src="styles/legend/5kmstraal_2.png" /> 5 km straal'
            });
var format_25kmstraal_3 = new ol.format.GeoJSON();
var features_25kmstraal_3 = format_25kmstraal_3.readFeatures(json_25kmstraal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25kmstraal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25kmstraal_3.addFeatures(features_25kmstraal_3);
var lyr_25kmstraal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25kmstraal_3, 
                style: style_25kmstraal_3,
                popuplayertitle: "2,5 km straal",
                interactive: false,
                title: '<img src="styles/legend/25kmstraal_3.png" /> 2,5 km straal'
            });
var format_4kmstraal_4 = new ol.format.GeoJSON();
var features_4kmstraal_4 = format_4kmstraal_4.readFeatures(json_4kmstraal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4kmstraal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4kmstraal_4.addFeatures(features_4kmstraal_4);
var lyr_4kmstraal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4kmstraal_4, 
                style: style_4kmstraal_4,
                popuplayertitle: "4 km straal",
                interactive: false,
                title: '<img src="styles/legend/4kmstraal_4.png" /> 4 km straal'
            });
var format_Municipalities_5 = new ol.format.GeoJSON();
var features_Municipalities_5 = format_Municipalities_5.readFeatures(json_Municipalities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_5.addFeatures(features_Municipalities_5);
var lyr_Municipalities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalities_5, 
                style: style_Municipalities_5,
                popuplayertitle: "Municipalities",
                interactive: true,
                title: '<img src="styles/legend/Municipalities_5.png" /> Municipalities'
            });
var format_Papierkartonbedrijf_6 = new ol.format.GeoJSON();
var features_Papierkartonbedrijf_6 = format_Papierkartonbedrijf_6.readFeatures(json_Papierkartonbedrijf_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Papierkartonbedrijf_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Papierkartonbedrijf_6.addFeatures(features_Papierkartonbedrijf_6);
var lyr_Papierkartonbedrijf_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Papierkartonbedrijf_6, 
                style: style_Papierkartonbedrijf_6,
                popuplayertitle: "Papier/karton bedrijf",
                interactive: true,
                title: '<img src="styles/legend/Papierkartonbedrijf_6.png" /> Papier/karton bedrijf'
            });
var format_solar_parks_and_planned_LGN2022_7 = new ol.format.GeoJSON();
var features_solar_parks_and_planned_LGN2022_7 = format_solar_parks_and_planned_LGN2022_7.readFeatures(json_solar_parks_and_planned_LGN2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solar_parks_and_planned_LGN2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solar_parks_and_planned_LGN2022_7.addFeatures(features_solar_parks_and_planned_LGN2022_7);
var lyr_solar_parks_and_planned_LGN2022_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solar_parks_and_planned_LGN2022_7, 
                style: style_solar_parks_and_planned_LGN2022_7,
                popuplayertitle: "solar_parks_and_planned_LGN2022",
                interactive: true,
                title: '<img src="styles/legend/solar_parks_and_planned_LGN2022_7.png" /> solar_parks_and_planned_LGN2022'
            });
var format_Final_solar_park_percelen_8 = new ol.format.GeoJSON();
var features_Final_solar_park_percelen_8 = format_Final_solar_park_percelen_8.readFeatures(json_Final_solar_park_percelen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_solar_park_percelen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_solar_park_percelen_8.addFeatures(features_Final_solar_park_percelen_8);
var lyr_Final_solar_park_percelen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Final_solar_park_percelen_8, 
                style: style_Final_solar_park_percelen_8,
                popuplayertitle: "Final_solar_park_percelen",
                interactive: true,
                title: '<img src="styles/legend/Final_solar_park_percelen_8.png" /> Final_solar_park_percelen'
            });
var group_zonneparken = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "zonneparken"});
var group_percelenclusters = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "percelen clusters"});
var group_final_percelen = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "final_percelen"});
var group_stepsgoede_percelen_5_km_5_ha_per_locatia = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "steps goede_percelen_5_km_5_ha_per_locatia"});
var group_steps_ = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "steps_"});
var group_woningen = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "woningen"});
var group_assistinglayers = new ol.layer.Group({
                                layers: [lyr_5kmstraal_2,lyr_25kmstraal_3,lyr_4kmstraal_4,],
                                fold: "open",
                                title: "assisting layers"});
var group_paper_parcels = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "paper_parcels"});
var group_Land_use = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Land_use"});

lyr_BackgroundNetherlands_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_5kmstraal_2.setVisible(true);lyr_25kmstraal_3.setVisible(false);lyr_4kmstraal_4.setVisible(false);lyr_Municipalities_5.setVisible(true);lyr_Papierkartonbedrijf_6.setVisible(true);lyr_solar_parks_and_planned_LGN2022_7.setVisible(true);lyr_Final_solar_park_percelen_8.setVisible(true);
var layersList = [lyr_BackgroundNetherlands_0,lyr_GoogleSatellite_1,group_assistinglayers,lyr_Municipalities_5,lyr_Papierkartonbedrijf_6,lyr_solar_parks_and_planned_LGN2022_7,lyr_Final_solar_park_percelen_8];
lyr_5kmstraal_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nea_id': 'nea_id', 'plant_name': 'plant_name', 'nea_name': 'nea_name', '2020_nea_e': '2020_nea_e', 'year_plant': 'year_plant', 'sbi_name': 'sbi_name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_25kmstraal_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nea_id': 'nea_id', 'plant_name': 'plant_name', 'nea_name': 'nea_name', '2020_nea_e': '2020_nea_e', 'year_plant': 'year_plant', 'sbi_name': 'sbi_name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_4kmstraal_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nea_id': 'nea_id', 'plant_name': 'plant_name', 'nea_name': 'nea_name', '2020_nea_e': '2020_nea_e', 'year_plant': 'year_plant', 'sbi_name': 'sbi_name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Municipalities_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'code': 'code', 'gemeentenaam': 'gemeentenaam', });
lyr_Papierkartonbedrijf_6.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nea_id': 'nea_id', 'plant_name': 'plant_name', 'nea_name': 'nea_name', '2020_nea_e': '2020_nea_e', 'year_plant': 'year_plant', 'sbi_name': 'sbi_name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_solar_parks_and_planned_LGN2022_7.set('fieldAliases', {'id': 'id', 'DN': 'DN', 'area_m2': 'area_m2', });
lyr_Final_solar_park_percelen_8.set('fieldAliases', {'fid': 'fid', 'kadastraleAanduiding': 'kadastraleAanduiding', 'sectie': 'sectie', 'perceelnummer': 'perceelnummer', 'Percelen area ha': 'Percelen area ha', 'Good grounduse percelen area ha': 'Good grounduse percelen area ha', });
lyr_5kmstraal_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'nea_id': 'TextEdit', 'plant_name': 'TextEdit', 'nea_name': 'TextEdit', '2020_nea_e': 'TextEdit', 'year_plant': 'TextEdit', 'sbi_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_25kmstraal_3.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'nea_id': 'TextEdit', 'plant_name': 'TextEdit', 'nea_name': 'TextEdit', '2020_nea_e': 'TextEdit', 'year_plant': 'TextEdit', 'sbi_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_4kmstraal_4.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'nea_id': 'TextEdit', 'plant_name': 'TextEdit', 'nea_name': 'TextEdit', '2020_nea_e': 'TextEdit', 'year_plant': 'TextEdit', 'sbi_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Municipalities_5.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'code': 'TextEdit', 'gemeentenaam': 'TextEdit', });
lyr_Papierkartonbedrijf_6.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'nea_id': 'TextEdit', 'plant_name': 'TextEdit', 'nea_name': 'TextEdit', '2020_nea_e': 'TextEdit', 'year_plant': 'TextEdit', 'sbi_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_solar_parks_and_planned_LGN2022_7.set('fieldImages', {'id': '', 'DN': '', 'area_m2': '', });
lyr_Final_solar_park_percelen_8.set('fieldImages', {'fid': 'TextEdit', 'kadastraleAanduiding': 'TextEdit', 'sectie': 'TextEdit', 'perceelnummer': 'Range', 'Percelen area ha': '', 'Good grounduse percelen area ha': '', });
lyr_5kmstraal_2.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nea_id': 'hidden field', 'plant_name': 'hidden field', 'nea_name': 'hidden field', '2020_nea_e': 'hidden field', 'year_plant': 'hidden field', 'sbi_name': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_25kmstraal_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'nea_id': 'no label', 'plant_name': 'no label', 'nea_name': 'no label', '2020_nea_e': 'no label', 'year_plant': 'no label', 'sbi_name': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_4kmstraal_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'nea_id': 'no label', 'plant_name': 'no label', 'nea_name': 'no label', '2020_nea_e': 'no label', 'year_plant': 'no label', 'sbi_name': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_Municipalities_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'code': 'hidden field', 'gemeentenaam': 'inline label - always visible', });
lyr_Papierkartonbedrijf_6.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nea_id': 'hidden field', 'plant_name': 'inline label - always visible', 'nea_name': 'header label - always visible', '2020_nea_e': 'hidden field', 'year_plant': 'hidden field', 'sbi_name': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_solar_parks_and_planned_LGN2022_7.set('fieldLabels', {'id': 'hidden field', 'DN': 'hidden field', 'area_m2': 'inline label - always visible', });
lyr_Final_solar_park_percelen_8.set('fieldLabels', {'fid': 'hidden field', 'kadastraleAanduiding': 'inline label - always visible', 'sectie': 'inline label - always visible', 'perceelnummer': 'inline label - always visible', 'Percelen area ha': 'inline label - always visible', 'Good grounduse percelen area ha': 'inline label - always visible', });
lyr_Final_solar_park_percelen_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});