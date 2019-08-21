const moduleName = 'visualizationMapModule';
module.exports.name = moduleName;

angular.module(moduleName, []).component('visualizationMap', {
  template: require('./visualization-map.html'),
  style: require('./visualization-map.css'),
  controller: visualizationMapController,
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

function visualizationMapController() {
  let self = this;
  self.type='pie';
  this.$onInit = function () {
    // self.getFeautreNames();
  }

  this.getLabelColor = function (label) {
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

    // console.log(d);

    return d;
  }
}