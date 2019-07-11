const moduleName = 'distributionMapModule';
module.exports.name = moduleName;

angular.module(moduleName, []).component('distributionMap', {
  template: require('./distribution-map.html'),
  style: require('./distribution-map.css'),
  controller: distributionMapController,
  controllerAs: 'self',
  bindings: {
    data: '<',
    colors: '<',
    colorScale: '<',
    getMaps: '<',
    getHeader: '<',
    getRows: '<',
    getCells: '<',
    getWeight: '<',
    getScaledWeight: '<',
    getLabel: '<',
    clickFn: '<'
  }
})

function distributionMapController() {
  let self = this;
  this.$onInit = function () { }

  this.getColors = function () {
    if (typeof(self.colors) === 'object') {
      return self.colors;
    }
    if (typeof(self.colors) === 'function') {
      return self.colors();
    }
    return;
  }

}