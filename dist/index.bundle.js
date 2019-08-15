/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/distribution-map/distribution-map.css":
/*!**************************************************************!*\
  !*** ./app/components/distribution-map/distribution-map.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./distribution-map.css */ \"./node_modules/css-loader/dist/cjs.js!./app/components/distribution-map/distribution-map.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.css?");

/***/ }),

/***/ "./app/components/distribution-map/distribution-map.html":
/*!***************************************************************!*\
  !*** ./app/components/distribution-map/distribution-map.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"distribution-map\\\">\\r\\n  <h3>Distribution map</h3>\\r\\n  <!-- <p>{{self.data}}</p> -->\\r\\n  <!-- Map -->\\r\\n  <div class=\\\"map\\\" ng-repeat=\\\"(i, map) in self.getMaps(self.data) track by i\\\">\\r\\n    <p class=\\\"map-header\\\">{{self.getHeader(map)}}</p>\\r\\n    <div class=\\\"map-row row\\\" ng-repeat=\\\"(j,row) in self.getRows(map) track by j\\\">\\r\\n      <div class=\\\"map-col\\\" ng-repeat=\\\"(k, cell) in self.getCells(row) track by k\\\"\\r\\n        ng-style=\\\"{'background-color': self.colorScale(self.getScaledWeight(cell))}\\\">\\r\\n        <div class=\\\"map-cell\\\" ng-click=\\\"self.clickFn($event, cell)\\\">\\r\\n          <div class=\\\"map-cell-tooltip\\\" ng-show=\\\"!self.labelHide\\\">\\r\\n            <p>{{self.getLabel(cell)}}</p>\\r\\n          </div>\\r\\n          <div class=\\\"map-cell-element\\\">\\r\\n            <!-- Elements inside each cells -->\\r\\n            <p ng-show=\\\"!self.weightHide\\\">{{self.getWeight(cell)}}</p>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- Color map -->\\r\\n  <div class=\\\"map-colormap\\\">\\r\\n    <svg class=\\\"map-legend\\\">\\r\\n      <defs>\\r\\n        <linearGradient id=\\\"Gradient1\\\" x1=\\\"0\\\" x2=\\\"1\\\" y1=\\\"0\\\" y2=\\\"0\\\" color-interpolation=\\\"sRGB\\\">\\r\\n          <stop ng-repeat=\\\"color in self.getColors()\\\" ng-attr-offset=\\\"{{$index / (self.getColors().length - 1)}}\\\"\\r\\n            ng-attr-stop-color=\\\"{{color}}\\\"></stop>\\r\\n        </linearGradient>\\r\\n      </defs>\\r\\n      <g>\\r\\n        <rect id=\\\"rect1\\\" x=\\\"0\\\" y=\\\"60%\\\" width=\\\"100%\\\" height=\\\"40%\\\" fill=\\\"url(#Gradient1)\\\" />\\r\\n        <text x=\\\"1%\\\" y=\\\"50%\\\">Low</text>\\r\\n        <text text-anchor=\\\"end\\\" x=\\\"99%\\\" y=\\\"50%\\\">High</text>\\r\\n      </g>\\r\\n    </svg>\\r\\n  </div>\\r\\n\\r\\n  <!-- Options -->\\r\\n  <div>\\r\\n    <button ng-click=\\\"self.chartType=0\\\">Bar chart</button>\\r\\n    <button ng-click=\\\"self.chartType=1\\\">Pie chart</button><br>\\r\\n    <!-- <input type=\\\"checkbox\\\" ng-click=\\\"self.chartHide=!self.chartHide\\\" checked>Show charts<br> -->\\r\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.labelHide=!self.labelHide\\\" checked>Show labels<br>\\r\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.weightHide=!self.weightHide\\\" checked>Show weights<br>\\r\\n  </div>\\r\\n\\r\\n</div>\";\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.html?");

/***/ }),

/***/ "./app/components/distribution-map/distribution-map.js":
/*!*************************************************************!*\
  !*** ./app/components/distribution-map/distribution-map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'distributionMapModule';\r\nmodule.exports.name = moduleName;\r\n\r\nangular.module(moduleName, []).component('distributionMap', {\r\n  template: __webpack_require__(/*! ./distribution-map.html */ \"./app/components/distribution-map/distribution-map.html\"),\r\n  style: __webpack_require__(/*! ./distribution-map.css */ \"./app/components/distribution-map/distribution-map.css\"),\r\n  controller: distributionMapController,\r\n  controllerAs: 'self',\r\n  bindings: {\r\n    data: '<',\r\n    colors: '<',\r\n    colorScale: '<',\r\n    getMaps: '<',\r\n    getHeader: '<',\r\n    getRows: '<',\r\n    getCells: '<',\r\n    getWeight: '<',\r\n    getScaledWeight: '<',\r\n    getLabel: '<',\r\n    clickFn: '<'\r\n  }\r\n})\r\n\r\nfunction distributionMapController() {\r\n  let self = this;\r\n  this.$onInit = function () { }\r\n\r\n  this.getColors = function () {\r\n    if (typeof(self.colors) === 'object') {\r\n      return self.colors;\r\n    }\r\n    if (typeof(self.colors) === 'function') {\r\n      return self.colors();\r\n    }\r\n    return;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.js?");

/***/ }),

/***/ "./app/components/visualization-map/visualization-map.css":
/*!****************************************************************!*\
  !*** ./app/components/visualization-map/visualization-map.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./visualization-map.css */ \"./node_modules/css-loader/dist/cjs.js!./app/components/visualization-map/visualization-map.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.css?");

/***/ }),

/***/ "./app/components/visualization-map/visualization-map.html":
/*!*****************************************************************!*\
  !*** ./app/components/visualization-map/visualization-map.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"visualization-map\\\">\\r\\n  <h3>Visualization Map</h3>\\r\\n  <!-- Map -->\\r\\n  <div class=\\\"map\\\">\\r\\n    <div class=\\\"map-row\\\" ng-repeat=\\\"row in self.getMap(self.data)\\\">\\r\\n      <div class=\\\"map-col\\\" ng-repeat=\\\"cell in self.getCells(row)\\\"\\r\\n        ng-style=\\\"{'background-color': self.getLabelColor(self.getLabel(cell))}\\\">\\r\\n        <div class=\\\"map-cell\\\" ng-click=\\\"self.clickFn($event, cell)\\\">\\r\\n          <div class=\\\"map-cell-tooltip\\\" ng-show=\\\"!self.weightHide\\\">\\r\\n            <span ng-repeat=\\\"feature in self.getFeatures(cell)\\\">\\r\\n              {{self.getFeatureName(feature)}}: {{self.getFeatureWeight(feature)}}\\r\\n            </span>\\r\\n          </div>\\r\\n          <div class=\\\"map-cell-element\\\">\\r\\n            <div class=\\\"map-chart\\\" ng-show=\\\"!self.chartHide\\\">\\r\\n              <svg width=\\\"100%\\\" height=\\\"100%\\\" viewBox=\\\"0 0 100 100\\\">\\r\\n                <g ng-show=\\\"!self.chartType\\\">\\r\\n                  <rect ng-repeat=\\\"(k, feature) in self.getFeatures(cell) track by k\\\"\\r\\n                    ng-attr-x=\\\"{{k * 100 / self.getFeatures(cell).length}}\\\"\\r\\n                    ng-attr-y=\\\"{{(self.maxWeight - self.getFeatureScaledWeight(feature)) / self.maxWeight * 100}}\\\"\\r\\n                    ng-attr-width=\\\"{{100 / self.getFeatures(cell).length}}\\\"\\r\\n                    ng-attr-height=\\\"{{self.getFeatureScaledWeight(feature) / self.maxWeight * 100}}%\\\" fill={{self.getFeatureColor(k)}}>\\r\\n                  </rect>\\r\\n                </g>\\r\\n                <g ng-show=\\\"self.chartType==1\\\">\\r\\n                  <path ng-repeat=\\\"(k, feature) in self.getFeatures(cell) track by k\\\"\\r\\n                    ng-attr-fill=\\\"{{self.getFeatureColor(k)}}\\\"\\r\\n                    ng-attr-d=\\\"{{self.describeArc(50, 50, self.getFeatureScaledWeight(feature) / self.maxWeight * 50, k * 360 / self.getFeatures(cell).length, (k + 1) * 360 / self.getFeatures(cell).length)}}\\\">\\r\\n                  </path>\\r\\n                </g>\\r\\n              </svg>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"map-cell-element\\\" ng-show=\\\"!self.labelHide\\\">\\r\\n            {{self.getLabel(cell)}}\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n  <!-- Legend -->\\r\\n  <div class=\\\"map-legend\\\">\\r\\n    <div class=\\\"map-legend-row\\\">\\r\\n      <div class=\\\"map-legend-col\\\" ng-style=\\\"{'background-color': self.getLabelColor(label)}\\\"\\r\\n        ng-repeat=\\\"(i, label) in self.getLabels(self.data) track by i\\\">\\r\\n        <p style=\\\"margin: 0 0 0\\\">\\r\\n          {{label}}</p>\\r\\n      </div>\\r\\n\\r\\n    </div>\\r\\n    <div class=\\\"map-legend-row\\\">\\r\\n      <p class=\\\"map-legend-col\\\" ng-repeat=\\\"(i, featureName) in self.getFeatureNames(self.data) track by i\\\">\\r\\n        {{featureName}}\\r\\n        <span ng-style=\\\"{\\r\\n          'background-color': self.getFeatureColor(i),\\r\\n          'display': 'inline-block',\\r\\n          'width': '10%',\\r\\n          'height': '50%'\\r\\n        }\\\">\\r\\n        </span>\\r\\n      </p>\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- Options -->\\r\\n  <div>\\r\\n    <button ng-click=\\\"self.chartType=0\\\">Bar chart</button>\\r\\n    <button ng-click=\\\"self.chartType=1\\\">Pie chart</button><br>\\r\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.chartHide=!self.chartHide\\\" checked>Show charts<br>\\r\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.labelHide=!self.labelHide\\\" checked>Show labels<br>\\r\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.weightHide=!self.weightHide\\\" checked>Show weights<br>\\r\\n  </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.html?");

/***/ }),

/***/ "./app/components/visualization-map/visualization-map.js":
/*!***************************************************************!*\
  !*** ./app/components/visualization-map/visualization-map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'visualizationMapModule';\r\nmodule.exports.name = moduleName;\r\n\r\nangular.module(moduleName, []).component('visualizationMap', {\r\n  template: __webpack_require__(/*! ./visualization-map.html */ \"./app/components/visualization-map/visualization-map.html\"),\r\n  style: __webpack_require__(/*! ./visualization-map.css */ \"./app/components/visualization-map/visualization-map.css\"),\r\n  controller: visualizationMapController,\r\n  controllerAs: 'self',\r\n  bindings: {\r\n    data: '<',\r\n    getMap: '<',\r\n    getCells: '<',\r\n    getFeatures: '<',\r\n    getLabels: '<',\r\n    getLabel: '<',\r\n    getFeatureWeight: '<',\r\n    getFeatureScaledWeight: '<',\r\n    maxWeight: '<',\r\n    minWeight: '<',\r\n    getFeatureNames: '<',\r\n    getFeatureName: '<',\r\n    labelColors: '<',\r\n    featureColors: '<',\r\n    clickFn: '<'\r\n  }\r\n})\r\n\r\nfunction visualizationMapController() {\r\n  let self = this;\r\n\r\n  this.$onInit = function () {\r\n    // self.getFeautreNames();\r\n  }\r\n\r\n  this.getLabelColor = function (label) {\r\n    if (typeof (self.labelColors) === 'object') {\r\n      return self.labelColors[label];\r\n    }\r\n    if (typeof (self.labelColors) === 'function') {\r\n      return self.labelColors()[label];\r\n    }\r\n    return;\r\n  }\r\n\r\n  this.getFeatureColor = function (featureSequenceNumber) {\r\n    if (typeof (self.featureColors) === 'object') {\r\n      return self.featureColors[featureSequenceNumber];\r\n    }\r\n    if (typeof (self.featureColors) === 'function') {\r\n      return self.featureColors()[label];\r\n    }\r\n    return;\r\n  }\r\n\r\n  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {\r\n    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;\r\n\r\n    return {\r\n      x: centerX + (radius * Math.cos(angleInRadians)),\r\n      y: centerY + (radius * Math.sin(angleInRadians))\r\n    };\r\n  }\r\n\r\n  this.describeArc = function (x, y, radius, startAngle, endAngle) {\r\n\r\n    var start = polarToCartesian(x, y, radius, endAngle);\r\n    var end = polarToCartesian(x, y, radius, startAngle);\r\n\r\n    var arcSweep = endAngle - startAngle <= 180 ? \"0\" : \"1\";\r\n\r\n    var d = [\r\n      \"M\", start.x, start.y,\r\n      \"A\", radius, radius, 0, arcSweep, 0, end.x, end.y,\r\n      \"L\", x, y,\r\n      \"L\", start.x, start.y\r\n    ].join(\" \");\r\n\r\n    // console.log(d);\r\n\r\n    return d;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.js?");

/***/ }),

/***/ "./app/configs/server-configs.js":
/*!***************************************!*\
  !*** ./app/configs/server-configs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  getFittedModelBaseUrl: \"http://127.0.0.1:5000/api/model/som\"\r\n}\n\n//# sourceURL=webpack:///./app/configs/server-configs.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {module.expports = {\r\n  distributionMapModule: __webpack_require__(/*! ./components/distribution-map/distribution-map */ \"./app/components/distribution-map/distribution-map.js\"),\r\n  visualizationMapModule: __webpack_require__(/*! ./components/visualization-map/visualization-map */ \"./app/components/visualization-map/visualization-map.js\"),\r\n  somModelService: __webpack_require__(/*! ./services/som-model-services */ \"./app/services/som-model-services.js\")\r\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/module.js */ \"C:\\\\Users\\\\ASUS\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\buildin\\\\module.js\")(module)))\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/services/som-model-services.js":
/*!********************************************!*\
  !*** ./app/services/som-model-services.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const serviceName = \"somModelService\";\r\nmodule.exports.name = serviceName;\r\n\r\nconst SERVER_CONFIGS = __webpack_require__(/*! ../configs/server-configs */ \"./app/configs/server-configs.js\")\r\n\r\nangular.module(serviceName, []).factory(serviceName, function ($http) {\r\n  return new somModel($http);\r\n})\r\n\r\nfunction somModel($http) {\r\n  this.$http = $http;\r\n}\r\n\r\nsomModel.prototype.getFittedModel = function () {\r\n  let url = SERVER_CONFIGS.getFittedModelBaseUrl + \"/test_01\";\r\n  return this.$http({\r\n    url: url,\r\n    method: \"GET\"\r\n  }).then(function(response) {\r\n    // console.log(response);\r\n    return response.data;\r\n  }).catch(function(err) {\r\n    throw err;\r\n  })\r\n}\r\n\r\nsomModel.prototype.modelCreate = function () { }\r\n\r\nsomModel.prototype.modelTrain = function () { }\r\n\r\nsomModel.prototype.modelPredict = function () { }\n\n//# sourceURL=webpack:///./app/services/som-model-services.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/distribution-map/distribution-map.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/distribution-map/distribution-map.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"distribution-map .distribution-map {\\r\\n  background-color: greenyellow;\\r\\n}\\r\\n\\r\\ndistribution-map .map {\\r\\n  margin: 5px;\\r\\n  background-color: pink;\\r\\n}\\r\\n\\r\\ndistribution-map .map-header {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\ndistribution-map .map-row {\\r\\n  display: flex;\\r\\n  border: 1px solid red;\\r\\n  width: 100%;\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\r\\n}\\r\\n\\r\\ndistribution-map .map-col {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  /* padding-right: 15px;\\r\\n  padding-left: 15px; */\\r\\n  -webkit-flex-basis: 0;\\r\\n  -ms-flex-preferred-size: 0;\\r\\n  flex-basis: 0;\\r\\n  -webkit-box-flex: 1;\\r\\n  -webkit-flex-grow: 1;\\r\\n  -ms-flex-positive: 1;\\r\\n  flex-grow: 1;\\r\\n  max-width: 100%;\\r\\n  \\r\\n  border: 1px solid blue;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\ndistribution-map .map-cell {\\r\\n  width: 100%;\\r\\n  padding-top: 100%;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ndistribution-map .map-cell-element {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\ndistribution-map .map-colormap {\\r\\n  width: 100%;\\r\\n  padding-top: 15%;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ndistribution-map .map-legend {\\r\\n  display: block;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\ndistribution-map .map-cell .map-cell-tooltip {\\r\\n  visibility: hidden;\\r\\n  width: 120px;\\r\\n  background-color: #555;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  border-radius: 6px;\\r\\n  padding: 5px 0;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  bottom: 105%;\\r\\n  left: 50%;\\r\\n  margin-left: -60px;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.3s;\\r\\n}\\r\\n\\r\\ndistribution-map .map-cell .map-cell-tooltip::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 100%;\\r\\n  left: 50%;\\r\\n  margin-left: -5px;\\r\\n  border-width: 5px;\\r\\n  border-style: solid;\\r\\n  border-color: #555 transparent transparent transparent;\\r\\n}\\r\\n\\r\\ndistribution-map .map-cell:hover .map-cell-tooltip {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/visualization-map/visualization-map.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/visualization-map/visualization-map.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"visualization-map .visualization-map {\\r\\n  background-color: greenyellow;\\r\\n}\\r\\n\\r\\nvisualization-map .map {\\r\\n  margin: 5px;\\r\\n  background-color: pink;\\r\\n}\\r\\n\\r\\nvisualization-map .map-header {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nvisualization-map .map-row {\\r\\n  display: flex;\\r\\n  border: 1px solid red;\\r\\n  width: 100%;\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\r\\n}\\r\\n\\r\\nvisualization-map .map-col {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  /* padding-right: 15px;\\r\\n  padding-left: 15px; */\\r\\n  -webkit-flex-basis: 0;\\r\\n  -ms-flex-preferred-size: 0;\\r\\n  flex-basis: 0;\\r\\n  -webkit-box-flex: 1;\\r\\n  -webkit-flex-grow: 1;\\r\\n  -ms-flex-positive: 1;\\r\\n  flex-grow: 1;\\r\\n  max-width: 100%;\\r\\n  \\r\\n  border: 1px solid blue;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell {\\r\\n  width: 100%;\\r\\n  padding-top: 100%;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell-element {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell-element:hover {\\r\\n  border: 2px solid red;\\r\\n}\\r\\n\\r\\nvisualization-map .map-chart {\\r\\n  padding: 5%;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell .map-cell-tooltip {\\r\\n  visibility: hidden;\\r\\n  width: 120px;\\r\\n  background-color: #555;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  border-radius: 6px;\\r\\n  padding: 5px 0;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  bottom: 105%;\\r\\n  left: 50%;\\r\\n  margin-left: -60px;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.3s;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell .map-cell-tooltip::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 100%;\\r\\n  left: 50%;\\r\\n  margin-left: -5px;\\r\\n  border-width: 5px;\\r\\n  border-style: solid;\\r\\n  border-color: #555 transparent transparent transparent;\\r\\n}\\r\\n\\r\\nvisualization-map .map-cell:hover .map-cell-tooltip {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\nvisualization-map .map-legend-row {\\r\\n  display: flex;\\r\\n  /* border: 1px solid red; */\\r\\n  width: 100%;\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\nvisualization-map .map-legend-col {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  /* padding-right: 15px;\\r\\n  padding-left: 15px; */\\r\\n  -webkit-flex-basis: 0;\\r\\n  -ms-flex-preferred-size: 0;\\r\\n  flex-basis: 0;\\r\\n  -webkit-box-flex: 1;\\r\\n  -webkit-flex-grow: 1;\\r\\n  -ms-flex-positive: 1;\\r\\n  flex-grow: 1;\\r\\n  max-width: 100%;\\r\\n  \\r\\n  text-align: center;\\r\\n  /* border: 1px solid blue;\\r\\n  padding: 0; */\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\webpack\\buildin\\module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });