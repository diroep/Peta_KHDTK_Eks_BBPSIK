var size = 0;
var placement = 'point';
function categories_KabKHDTK_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Kab. Bondowoso':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,233,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kab. Gunung Kidul':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kab. Situbondo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,68,22,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kab. Sleman':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,0,246,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kab. Wonogiri':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,38,175,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_KabKHDTK_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("NAMA_KAB");
    var labelFont = "6.5px \'Arial\', sans-serif";
    var labelFill = "#fbfbfb";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAMA_KAB") !== null) {
        labelText = String(feature.get("NAMA_KAB"));
    }
    
    var style = categories_KabKHDTK_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
