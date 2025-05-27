var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KabKHDTK_2 = new ol.format.GeoJSON();
var features_KabKHDTK_2 = format_KabKHDTK_2.readFeatures(json_KabKHDTK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabKHDTK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabKHDTK_2.addFeatures(features_KabKHDTK_2);
var lyr_KabKHDTK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabKHDTK_2, 
                style: style_KabKHDTK_2,
                popuplayertitle: 'KabKHDTK',
                interactive: false,
    title: 'KabKHDTK<br />\
    <img src="styles/legend/KabKHDTK_2_0.png" /> Kab. Bondowoso<br />\
    <img src="styles/legend/KabKHDTK_2_1.png" /> Kab. Gunung Kidul<br />\
    <img src="styles/legend/KabKHDTK_2_2.png" /> Kab. Situbondo<br />\
    <img src="styles/legend/KabKHDTK_2_3.png" /> Kab. Sleman<br />\
    <img src="styles/legend/KabKHDTK_2_4.png" /> Kab. Wonogiri<br />' });
var format_KHDTK_Gabung1_3 = new ol.format.GeoJSON();
var features_KHDTK_Gabung1_3 = format_KHDTK_Gabung1_3.readFeatures(json_KHDTK_Gabung1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTK_Gabung1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTK_Gabung1_3.addFeatures(features_KHDTK_Gabung1_3);
var lyr_KHDTK_Gabung1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTK_Gabung1_3, 
                style: style_KHDTK_Gabung1_3,
                popuplayertitle: 'KHDTK_Gabung1',
                interactive: true,
                title: '<img src="styles/legend/KHDTK_Gabung1_3.png" /> KHDTK_Gabung1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_KabKHDTK_2.setVisible(true);lyr_KHDTK_Gabung1_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WorldImagery_1,lyr_KabKHDTK_2,lyr_KHDTK_Gabung1_3];
lyr_KabKHDTK_2.set('fieldAliases', {'NAMA_KAB': 'NAMA_KAB', 'NAMA_PROP': 'NAMA_PROP', 'KODE_KAB': 'KODE_KAB', 'KODE_PROP': 'KODE_PROP', 'PROV': 'PROV', 'KAB': 'KAB', 'PROV_CODE': 'PROV_CODE', 'KAB_CODE': 'KAB_CODE', });
lyr_KHDTK_Gabung1_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'Nama': 'Nama', 'OBJECTID': 'OBJECTID', 'Lokasi_1': 'Letak', 'LokasiKawa': 'Kawasan', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK', 'Foto': 'Foto', 'Peta': 'Peta', 'Nama_KHDTK': 'Alamat GMaps', 'auxiliary_storage_labeling_predefinedpositionorder': 'auxiliary_storage_labeling_predefinedpositionorder', 'auxiliary_storage_labeling_offsetquad': 'auxiliary_storage_labeling_offsetquad', });
lyr_KabKHDTK_2.set('fieldImages', {'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', 'KODE_KAB': 'TextEdit', 'KODE_PROP': 'TextEdit', 'PROV': 'TextEdit', 'KAB': 'TextEdit', 'PROV_CODE': 'TextEdit', 'KAB_CODE': 'TextEdit', });
lyr_KHDTK_Gabung1_3.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Id': 'Hidden', 'Nama': 'TextEdit', 'OBJECTID': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'Hidden', 'Koordina_1': 'Hidden', 'Luas': 'TextEdit', 'SK_1': 'Hidden', 'Foto': 'ExternalResource', 'Peta': 'Hidden', 'Nama_KHDTK': 'TextEdit', 'auxiliary_storage_labeling_predefinedpositionorder': 'TextEdit', 'auxiliary_storage_labeling_offsetquad': 'TextEdit', });
lyr_KabKHDTK_2.set('fieldLabels', {'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', 'KODE_KAB': 'no label', 'KODE_PROP': 'no label', 'PROV': 'no label', 'KAB': 'no label', 'PROV_CODE': 'no label', 'KAB_CODE': 'no label', });
lyr_KHDTK_Gabung1_3.set('fieldLabels', {'Nama': 'inline label - always visible', 'Lokasi_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Nama_KHDTK': 'inline label - visible with data', 'auxiliary_storage_labeling_predefinedpositionorder': 'no label', 'auxiliary_storage_labeling_offsetquad': 'no label', });
lyr_KHDTK_Gabung1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});