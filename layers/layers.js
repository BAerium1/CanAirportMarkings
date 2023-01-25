var wms_layers = [];


        var lyr_Cyclosm_0 = new ol.layer.Tile({
            'title': 'Cyclosm',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AirportswithLRMarking_2 = new ol.format.GeoJSON();
var features_AirportswithLRMarking_2 = format_AirportswithLRMarking_2.readFeatures(json_AirportswithLRMarking_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithLRMarking_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithLRMarking_2.addFeatures(features_AirportswithLRMarking_2);
var lyr_AirportswithLRMarking_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithLRMarking_2, 
                style: style_AirportswithLRMarking_2,
                interactive: true,
                title: '<img src="styles/legend/AirportswithLRMarking_2.png" /> Airports with L/R Marking'
            });
var format_AirportswithHoldingLine_3 = new ol.format.GeoJSON();
var features_AirportswithHoldingLine_3 = format_AirportswithHoldingLine_3.readFeatures(json_AirportswithHoldingLine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithHoldingLine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithHoldingLine_3.addFeatures(features_AirportswithHoldingLine_3);
var lyr_AirportswithHoldingLine_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithHoldingLine_3, 
                style: style_AirportswithHoldingLine_3,
                interactive: true,
                title: '<img src="styles/legend/AirportswithHoldingLine_3.png" /> Airports with Holding Line'
            });
var format_AirportswithDemarcationIntersect_4 = new ol.format.GeoJSON();
var features_AirportswithDemarcationIntersect_4 = format_AirportswithDemarcationIntersect_4.readFeatures(json_AirportswithDemarcationIntersect_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithDemarcationIntersect_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithDemarcationIntersect_4.addFeatures(features_AirportswithDemarcationIntersect_4);
var lyr_AirportswithDemarcationIntersect_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithDemarcationIntersect_4, 
                style: style_AirportswithDemarcationIntersect_4,
                interactive: true,
                title: '<img src="styles/legend/AirportswithDemarcationIntersect_4.png" /> Airports with Demarcation & Intersect'
            });
var format_AirportswithThresholdIntersect_5 = new ol.format.GeoJSON();
var features_AirportswithThresholdIntersect_5 = format_AirportswithThresholdIntersect_5.readFeatures(json_AirportswithThresholdIntersect_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithThresholdIntersect_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithThresholdIntersect_5.addFeatures(features_AirportswithThresholdIntersect_5);
var lyr_AirportswithThresholdIntersect_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithThresholdIntersect_5, 
                style: style_AirportswithThresholdIntersect_5,
                interactive: true,
                title: '<img src="styles/legend/AirportswithThresholdIntersect_5.png" /> Airports with Threshold & Intersect'
            });
var format_AirportswithSingletonDemarcation_6 = new ol.format.GeoJSON();
var features_AirportswithSingletonDemarcation_6 = format_AirportswithSingletonDemarcation_6.readFeatures(json_AirportswithSingletonDemarcation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithSingletonDemarcation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithSingletonDemarcation_6.addFeatures(features_AirportswithSingletonDemarcation_6);
var lyr_AirportswithSingletonDemarcation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithSingletonDemarcation_6, 
                style: style_AirportswithSingletonDemarcation_6,
                interactive: true,
                title: '<img src="styles/legend/AirportswithSingletonDemarcation_6.png" /> Airports with Singleton & Demarcation'
            });
var format_AirportswithSingletonThreshold_7 = new ol.format.GeoJSON();
var features_AirportswithSingletonThreshold_7 = format_AirportswithSingletonThreshold_7.readFeatures(json_AirportswithSingletonThreshold_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithSingletonThreshold_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithSingletonThreshold_7.addFeatures(features_AirportswithSingletonThreshold_7);
var lyr_AirportswithSingletonThreshold_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithSingletonThreshold_7, 
                style: style_AirportswithSingletonThreshold_7,
                interactive: true,
                title: '<img src="styles/legend/AirportswithSingletonThreshold_7.png" /> Airports with Singleton & Threshold'
            });
var format_AirportswithChevronHalf_8 = new ol.format.GeoJSON();
var features_AirportswithChevronHalf_8 = format_AirportswithChevronHalf_8.readFeatures(json_AirportswithChevronHalf_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithChevronHalf_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithChevronHalf_8.addFeatures(features_AirportswithChevronHalf_8);
var lyr_AirportswithChevronHalf_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithChevronHalf_8, 
                style: style_AirportswithChevronHalf_8,
                interactive: true,
                title: '<img src="styles/legend/AirportswithChevronHalf_8.png" /> Airports with Chevron Half'
            });
var format_AirportswithChevron_9 = new ol.format.GeoJSON();
var features_AirportswithChevron_9 = format_AirportswithChevron_9.readFeatures(json_AirportswithChevron_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithChevron_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithChevron_9.addFeatures(features_AirportswithChevron_9);
var lyr_AirportswithChevron_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithChevron_9, 
                style: style_AirportswithChevron_9,
                interactive: true,
                title: '<img src="styles/legend/AirportswithChevron_9.png" /> Airports with Chevron'
            });
var format_AirportswithArrow_10 = new ol.format.GeoJSON();
var features_AirportswithArrow_10 = format_AirportswithArrow_10.readFeatures(json_AirportswithArrow_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithArrow_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithArrow_10.addFeatures(features_AirportswithArrow_10);
var lyr_AirportswithArrow_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithArrow_10, 
                style: style_AirportswithArrow_10,
                interactive: true,
                title: '<img src="styles/legend/AirportswithArrow_10.png" /> Airports with Arrow'
            });
var format_AirportswithAimingPoint_11 = new ol.format.GeoJSON();
var features_AirportswithAimingPoint_11 = format_AirportswithAimingPoint_11.readFeatures(json_AirportswithAimingPoint_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithAimingPoint_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithAimingPoint_11.addFeatures(features_AirportswithAimingPoint_11);
var lyr_AirportswithAimingPoint_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithAimingPoint_11, 
                style: style_AirportswithAimingPoint_11,
                interactive: true,
                title: '<img src="styles/legend/AirportswithAimingPoint_11.png" /> Airports with Aiming Point'
            });
var format_AirportswithTouchdownZone_12 = new ol.format.GeoJSON();
var features_AirportswithTouchdownZone_12 = format_AirportswithTouchdownZone_12.readFeatures(json_AirportswithTouchdownZone_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithTouchdownZone_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithTouchdownZone_12.addFeatures(features_AirportswithTouchdownZone_12);
var lyr_AirportswithTouchdownZone_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithTouchdownZone_12, 
                style: style_AirportswithTouchdownZone_12,
                interactive: true,
                title: '<img src="styles/legend/AirportswithTouchdownZone_12.png" /> Airports with Touchdown Zone'
            });
var format_AirportswithThreshold_13 = new ol.format.GeoJSON();
var features_AirportswithThreshold_13 = format_AirportswithThreshold_13.readFeatures(json_AirportswithThreshold_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithThreshold_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithThreshold_13.addFeatures(features_AirportswithThreshold_13);
var lyr_AirportswithThreshold_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithThreshold_13, 
                style: style_AirportswithThreshold_13,
                interactive: true,
                title: '<img src="styles/legend/AirportswithThreshold_13.png" /> Airports with Threshold'
            });
var format_AirportswithCenterlines_14 = new ol.format.GeoJSON();
var features_AirportswithCenterlines_14 = format_AirportswithCenterlines_14.readFeatures(json_AirportswithCenterlines_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportswithCenterlines_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportswithCenterlines_14.addFeatures(features_AirportswithCenterlines_14);
var lyr_AirportswithCenterlines_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirportswithCenterlines_14, 
                style: style_AirportswithCenterlines_14,
                interactive: true,
                title: '<img src="styles/legend/AirportswithCenterlines_14.png" /> Airports with Centerlines'
            });
var format_CanadianAirports_15 = new ol.format.GeoJSON();
var features_CanadianAirports_15 = format_CanadianAirports_15.readFeatures(json_CanadianAirports_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanadianAirports_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanadianAirports_15.addFeatures(features_CanadianAirports_15);
var lyr_CanadianAirports_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CanadianAirports_15, 
                style: style_CanadianAirports_15,
                interactive: true,
                title: '<img src="styles/legend/CanadianAirports_15.png" /> Canadian Airports'
            });

lyr_Cyclosm_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_AirportswithLRMarking_2.setVisible(false);lyr_AirportswithHoldingLine_3.setVisible(false);lyr_AirportswithDemarcationIntersect_4.setVisible(false);lyr_AirportswithThresholdIntersect_5.setVisible(false);lyr_AirportswithSingletonDemarcation_6.setVisible(false);lyr_AirportswithSingletonThreshold_7.setVisible(false);lyr_AirportswithChevronHalf_8.setVisible(false);lyr_AirportswithChevron_9.setVisible(false);lyr_AirportswithArrow_10.setVisible(false);lyr_AirportswithAimingPoint_11.setVisible(false);lyr_AirportswithTouchdownZone_12.setVisible(false);lyr_AirportswithThreshold_13.setVisible(false);lyr_AirportswithCenterlines_14.setVisible(false);lyr_CanadianAirports_15.setVisible(true);
var layersList = [lyr_Cyclosm_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,lyr_AirportswithLRMarking_2,lyr_AirportswithHoldingLine_3,lyr_AirportswithDemarcationIntersect_4,lyr_AirportswithThresholdIntersect_5,lyr_AirportswithSingletonDemarcation_6,lyr_AirportswithSingletonThreshold_7,lyr_AirportswithChevronHalf_8,lyr_AirportswithChevron_9,lyr_AirportswithArrow_10,lyr_AirportswithAimingPoint_11,lyr_AirportswithTouchdownZone_12,lyr_AirportswithThreshold_13,lyr_AirportswithCenterlines_14,lyr_CanadianAirports_15];
lyr_AirportswithLRMarking_2.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithHoldingLine_3.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithDemarcationIntersect_4.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithThresholdIntersect_5.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithSingletonDemarcation_6.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithSingletonThreshold_7.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithChevronHalf_8.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithChevron_9.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithArrow_10.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithAimingPoint_11.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithTouchdownZone_12.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithThreshold_13.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithCenterlines_14.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_CanadianAirports_15.set('fieldAliases', {'Airport': 'Airport', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GROUP': 'GROUP', 'SINGLETONS': 'SINGLETONS', 'CENTERLINE': 'CENTERLINE', 'THRESHOLD': 'THRESHOLD', 'TOUCHDOWNZ': 'TOUCHDOWNZ', 'AIMINGPOIN': 'AIMINGPOIN', 'ARROW': 'ARROW', 'CHEVRON': 'CHEVRON', 'CHEVRON_HA': 'CHEVRON_HA', 'SINGLETON_': 'SINGLETON_', 'SINGLETO_1': 'SINGLETO_1', 'THRESHOLDB': 'THRESHOLDB', 'DEMARCATIO': 'DEMARCATIO', 'HOLDINGLIN': 'HOLDINGLIN', 'L/R': 'L/R', 'RUNWAY_SID': 'RUNWAY_SID', 'SINGLETO_2': 'SINGLETO_2', 'SINGLETO_3': 'SINGLETO_3', });
lyr_AirportswithLRMarking_2.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithHoldingLine_3.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithDemarcationIntersect_4.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithThresholdIntersect_5.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithSingletonDemarcation_6.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithSingletonThreshold_7.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithChevronHalf_8.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithChevron_9.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithArrow_10.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithAimingPoint_11.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithTouchdownZone_12.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithThreshold_13.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithCenterlines_14.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_CanadianAirports_15.set('fieldImages', {'Airport': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GROUP': 'TextEdit', 'SINGLETONS': 'TextEdit', 'CENTERLINE': 'Range', 'THRESHOLD': 'Range', 'TOUCHDOWNZ': 'Range', 'AIMINGPOIN': 'Range', 'ARROW': 'Range', 'CHEVRON': 'Range', 'CHEVRON_HA': 'Range', 'SINGLETON_': 'Range', 'SINGLETO_1': 'Range', 'THRESHOLDB': 'Range', 'DEMARCATIO': 'Range', 'HOLDINGLIN': 'Range', 'L/R': 'Range', 'RUNWAY_SID': 'TextEdit', 'SINGLETO_2': 'TextEdit', 'SINGLETO_3': 'TextEdit', });
lyr_AirportswithLRMarking_2.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithHoldingLine_3.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithDemarcationIntersect_4.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithThresholdIntersect_5.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithSingletonDemarcation_6.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithSingletonThreshold_7.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithChevronHalf_8.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithChevron_9.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithArrow_10.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithAimingPoint_11.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithTouchdownZone_12.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithThreshold_13.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_AirportswithCenterlines_14.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_CanadianAirports_15.set('fieldLabels', {'Airport': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'GROUP': 'inline label', 'SINGLETONS': 'inline label', 'CENTERLINE': 'inline label', 'THRESHOLD': 'inline label', 'TOUCHDOWNZ': 'inline label', 'AIMINGPOIN': 'inline label', 'ARROW': 'inline label', 'CHEVRON': 'inline label', 'CHEVRON_HA': 'inline label', 'SINGLETON_': 'inline label', 'SINGLETO_1': 'inline label', 'THRESHOLDB': 'inline label', 'DEMARCATIO': 'inline label', 'HOLDINGLIN': 'inline label', 'L/R': 'inline label', 'RUNWAY_SID': 'inline label', 'SINGLETO_2': 'inline label', 'SINGLETO_3': 'inline label', });
lyr_CanadianAirports_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});