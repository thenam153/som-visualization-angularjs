const moduleName = 'heatMap';
module.exports.name = moduleName;

angular.module(moduleName, []).component(moduleName, {
  template: require('./heat-map.html'),
  style: require('./heat-map.css'),
  controller: heatMapController,
  controllerAs: 'self',
  bindings: {
    data: '<',
    getMap: '<',
    getCells: '<',
    getFeatures: '<',
    getLabels: '<',
    getLabel: '<',
    getFeatureWeight: '<',
    getFeatureScaledWeight: '<',
    maxWeight: '<',
    minWeight: '<',
    getFeatureNames: '<',
    getFeatureName: '<',
    labelColors: '<',
    featureColors: '<',
    clickFn: '<'
  }
})

function heatMapController() {
  let self = this;
  self.type='pie';
  this.$onInit = function () {
  }
  function count(x, y, data) {
    let node = 0;
    let total = 0;
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            if(data[x + i] && data[x + i].cells[y + j] ) {
                total++;
                if(data[x].cells[y].label == data[x + i].cells[y + j].label) {
                    node++;
                }
                
            }
        }
    }

    return parseInt((node/total) * 9);
    } 
  this.getLabelColor = function (x, y) {
      console.log(x, y, self.data.visualizationMap)
    let label = count(x, y, self.data.visualizationMap);
    if (typeof (self.labelColors) === 'object') {
      return self.labelColors[label];
    }
    if (typeof (self.labelColors) === 'function') {
      return self.labelColors()[label];
    }
    return;
  }

  this.getFeatureColor = function (featureSequenceNumber) {
    if (typeof (self.featureColors) === 'object') {
      return self.featureColors[featureSequenceNumber];
    }
    if (typeof (self.featureColors) === 'function') {
      return self.featureColors()[label];
    }
    return;
  }

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  this.describeArc = function (x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
      "L", x, y,
      "L", start.x, start.y
    ].join(" ");
    return d;
  }
}