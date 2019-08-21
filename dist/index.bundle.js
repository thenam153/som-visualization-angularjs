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

/***/ "../../../../../usr/local/lib/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif (!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

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

eval("module.exports = \"<div style=\\\"position: absolute; top: 40px; left: 25px;\\\">\\n  <div style=\\\"display: flex; align-items: center;\\\">\\n    <div class=\\\"btn-fn\\\">\\n        <div class=\\\"toolbar-btn\\\" \\n        ng-class=\\\"{'active-btn': !self.weightHide}\\\"\\n        ng-click=\\\"self.weightHide=!self.weightHide\\\">Show weights</div>\\n        <div class=\\\"toolbar-btn\\\" style=\\\"font-size: 10px;\\\">LOW&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\n          <div ng-repeat=\\\"color in self.getColors()\\\" class=\\\"map-legend\\\"\\n          ng-style=\\\"{'background-color':'{{color}}'}\\\"></div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspHIGH\\n        </div>\\n    </div>\\n   \\n  </div>\\n</div>\\n<div style=\\\"display: none;\\\">\\n  <div class=\\\"map-colormap\\\">\\n   \\n  </div>\\n  <div>\\n    <button ng-click=\\\"self.chartType=0\\\">Bar chart</button>\\n    <button ng-click=\\\"self.chartType=1\\\">Pie chart</button><br>\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.labelHide=!self.labelHide\\\" checked>Show labels<br>\\n    <input type=\\\"checkbox\\\" ng-click=\\\"self.weightHide=!self.weightHide\\\" checked>Show weights<br>\\n  </div>\\n</div>\\n<div class=\\\"distribution-map\\\">\\n  <!-- <h3>Distribution map</h3> -->\\n  <!-- <p>{{self.data}}</p> -->\\n  <!-- Map -->\\n  <div class=\\\"map\\\" ng-repeat=\\\"(i, map) in self.getMaps(self.data) track by i\\\">\\n    <p class=\\\"map-header\\\">{{self.getHeader(map)}}</p>\\n    <div style=\\\"overflow: hidden auto; height: calc(100% - 50px);\\\">\\n      <div class=\\\"map-row row\\\" ng-repeat=\\\"(j,row) in self.getRows(map) track by j\\\">\\n        <div class=\\\"map-col\\\" ng-repeat=\\\"(k, cell) in self.getCells(row) track by k\\\"\\n          ng-style=\\\"{'background-color': self.colorScale(self.getScaledWeight(cell))}\\\">\\n          <div class=\\\"map-cell\\\" ng-click=\\\"self.clickFn($event, cell)\\\">\\n            <div class=\\\"map-cell-tooltip\\\" ng-show=\\\"!self.labelHide\\\">\\n              <p>{{self.getLabel(cell)}}</p>\\n            </div>\\n            <div class=\\\"map-cell-element\\\">\\n              <!-- Elements inside each cells -->\\n              <p ng-show=\\\"!self.weightHide\\\">{{self.getWeight(cell)}}</p>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n\\n</div>\";\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.html?");

/***/ }),

/***/ "./app/components/distribution-map/distribution-map.js":
/*!*************************************************************!*\
  !*** ./app/components/distribution-map/distribution-map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'distributionMapModule';\nmodule.exports.name = moduleName;\n\nangular.module(moduleName, []).component('distributionMap', {\n  template: __webpack_require__(/*! ./distribution-map.html */ \"./app/components/distribution-map/distribution-map.html\"),\n  style: __webpack_require__(/*! ./distribution-map.css */ \"./app/components/distribution-map/distribution-map.css\"),\n  controller: distributionMapController,\n  controllerAs: 'self',\n  bindings: {\n    data: '<',\n    colors: '<',\n    colorScale: '<',\n    getMaps: '<',\n    getHeader: '<',\n    getRows: '<',\n    getCells: '<',\n    getWeight: '<',\n    getScaledWeight: '<',\n    getLabel: '<',\n    clickFn: '<'\n  }\n})\n\nfunction distributionMapController() {\n  let self = this;\n  this.$onInit = function () { }\n\n  this.getColors = function () {\n    if (typeof(self.colors) === 'object') {\n      return self.colors;\n    }\n    if (typeof(self.colors) === 'function') {\n      return self.colors();\n    }\n    return;\n  }\n\n}\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.js?");

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

eval("module.exports = \"<div style=\\\"position: absolute; top: 40px; right: 25px;\\\">\\n  <div style=\\\"display: flex; align-items: center;\\\">\\n    <div class=\\\"btn-fn\\\">\\n        <div class=\\\"toolbar-btn\\\" ng-show=\\\"self.type==='pie'\\\" ng-click=\\\"self.chartType=0; self.type='bar'\\\">Bar chart</div>\\n        <div class=\\\"toolbar-btn\\\" ng-show=\\\"self.type==='bar'\\\" ng-click=\\\"self.chartType=1; self.type='pie'\\\">Pie chart</div>\\n        <div class=\\\"toolbar-btn\\\" ng-class=\\\"{'active-btn': self.chartHide}\\\" ng-click=\\\"self.chartHide=!self.chartHide\\\">Hide chart</div>\\n        <div class=\\\"toolbar-btn\\\" ng-class=\\\"{'active-btn': self.labelHide}\\\" ng-click=\\\"self.labelHide=!self.labelHide\\\">Hide label</div>\\n    </div>\\n  </div>\\n</div>\\n<div class=\\\"map-legend\\\" style=\\\"display: none;\\\">\\n  <div class=\\\"map-legend-row\\\">\\n    <div class=\\\"map-legend-col\\\" ng-style=\\\"{'background-color': self.getLabelColor(label)}\\\"\\n      ng-repeat=\\\"(i, label) in self.getLabels(self.data) track by i\\\">\\n      <p style=\\\"margin: 0 0 0\\\">\\n        {{label}}</p>\\n    </div>\\n\\n  </div>\\n  <div class=\\\"map-legend-row\\\">\\n    <p class=\\\"map-legend-col\\\" ng-repeat=\\\"(i, featureName) in self.getFeatureNames(self.data) track by i\\\">\\n      {{featureName}}\\n      <span ng-style=\\\"{\\n        'background-color': self.getFeatureColor(i),\\n        'display': 'inline-block',\\n        'width': '10%',\\n        'height': '50%'\\n      }\\\">\\n      </span>\\n    </p>\\n  </div>\\n</div>\\n<div class=\\\"visualization-map\\\">\\n  <!-- <h3>Visualization Map</h3> -->\\n  <!-- Map -->\\n  <div class=\\\"map\\\">\\n      <p class=\\\"map-header\\\">Visualization Map</p>\\n      <div style=\\\"overflow: hidden auto; height: calc(100% - 50px);\\\">\\n          <div class=\\\"map-row\\\" ng-repeat=\\\"row in self.getMap(self.data)\\\">\\n            <div class=\\\"map-col\\\" ng-repeat=\\\"cell in self.getCells(row)\\\"\\n              ng-style=\\\"{'background-color': self.getLabelColor(self.getLabel(cell))}\\\">\\n              <div class=\\\"map-cell\\\" ng-click=\\\"self.clickFn($event, cell)\\\">\\n                <div class=\\\"map-cell-tooltip\\\" ng-show=\\\"!self.weightHide\\\">\\n                  <span ng-repeat=\\\"feature in self.getFeatures(cell)\\\">\\n                    {{self.getFeatureName(feature)}}: {{self.getFeatureWeight(feature)}}\\n                  </span>\\n                </div>\\n                <div class=\\\"map-cell-element\\\">\\n                  <div class=\\\"map-chart\\\" ng-show=\\\"!self.chartHide\\\">\\n                    <svg width=\\\"100%\\\" height=\\\"100%\\\" viewBox=\\\"0 0 100 100\\\">\\n                      <g ng-show=\\\"!self.chartType\\\">\\n                        <rect ng-repeat=\\\"(k, feature) in self.getFeatures(cell) track by k\\\"\\n                          ng-attr-x=\\\"{{k * 100 / self.getFeatures(cell).length}}\\\"\\n                          ng-attr-y=\\\"{{(self.maxWeight - self.getFeatureScaledWeight(feature)) / self.maxWeight * 100}}\\\"\\n                          ng-attr-width=\\\"{{100 / self.getFeatures(cell).length}}\\\"\\n                          ng-attr-height=\\\"{{self.getFeatureScaledWeight(feature) / self.maxWeight * 100}}%\\\" fill={{self.getFeatureColor(k)}}>\\n                        </rect>\\n                      </g>\\n                      <g ng-show=\\\"self.chartType==1\\\">\\n                        <path ng-repeat=\\\"(k, feature) in self.getFeatures(cell) track by k\\\"\\n                          ng-attr-fill=\\\"{{self.getFeatureColor(k)}}\\\"\\n                          ng-attr-d=\\\"{{self.describeArc(50, 50, self.getFeatureScaledWeight(feature) / self.maxWeight * 50, k * 360 / self.getFeatures(cell).length, (k + 1) * 360 / self.getFeatures(cell).length)}}\\\">\\n                        </path>\\n                      </g>\\n                    </svg>\\n                  </div>\\n                </div>\\n                <div class=\\\"map-cell-element\\\" ng-show=\\\"!self.labelHide\\\">\\n                  {{self.getLabel(cell)}}\\n                </div>\\n              </div>\\n            </div>\\n          </div>\\n      </div>\\n  </div>\\n \\n</div>\";\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.html?");

/***/ }),

/***/ "./app/components/visualization-map/visualization-map.js":
/*!***************************************************************!*\
  !*** ./app/components/visualization-map/visualization-map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'visualizationMapModule';\nmodule.exports.name = moduleName;\n\nangular.module(moduleName, []).component('visualizationMap', {\n  template: __webpack_require__(/*! ./visualization-map.html */ \"./app/components/visualization-map/visualization-map.html\"),\n  style: __webpack_require__(/*! ./visualization-map.css */ \"./app/components/visualization-map/visualization-map.css\"),\n  controller: visualizationMapController,\n  controllerAs: 'self',\n  bindings: {\n    data: '<',\n    getMap: '<',\n    getCells: '<',\n    getFeatures: '<',\n    getLabels: '<',\n    getLabel: '<',\n    getFeatureWeight: '<',\n    getFeatureScaledWeight: '<',\n    maxWeight: '<',\n    minWeight: '<',\n    getFeatureNames: '<',\n    getFeatureName: '<',\n    labelColors: '<',\n    featureColors: '<',\n    clickFn: '<'\n  }\n})\n\nfunction visualizationMapController() {\n  let self = this;\n  self.type='pie';\n  this.$onInit = function () {\n    // self.getFeautreNames();\n  }\n\n  this.getLabelColor = function (label) {\n    if (typeof (self.labelColors) === 'object') {\n      return self.labelColors[label];\n    }\n    if (typeof (self.labelColors) === 'function') {\n      return self.labelColors()[label];\n    }\n    return;\n  }\n\n  this.getFeatureColor = function (featureSequenceNumber) {\n    if (typeof (self.featureColors) === 'object') {\n      return self.featureColors[featureSequenceNumber];\n    }\n    if (typeof (self.featureColors) === 'function') {\n      return self.featureColors()[label];\n    }\n    return;\n  }\n\n  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {\n    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;\n\n    return {\n      x: centerX + (radius * Math.cos(angleInRadians)),\n      y: centerY + (radius * Math.sin(angleInRadians))\n    };\n  }\n\n  this.describeArc = function (x, y, radius, startAngle, endAngle) {\n\n    var start = polarToCartesian(x, y, radius, endAngle);\n    var end = polarToCartesian(x, y, radius, startAngle);\n\n    var arcSweep = endAngle - startAngle <= 180 ? \"0\" : \"1\";\n\n    var d = [\n      \"M\", start.x, start.y,\n      \"A\", radius, radius, 0, arcSweep, 0, end.x, end.y,\n      \"L\", x, y,\n      \"L\", start.x, start.y\n    ].join(\" \");\n\n    // console.log(d);\n\n    return d;\n  }\n}\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.js?");

/***/ }),

/***/ "./app/configs/server-configs.js":
/*!***************************************!*\
  !*** ./app/configs/server-configs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  getFittedModelBaseUrl: \"http://127.0.0.1:5000/api/model/som\"\n}\n\n//# sourceURL=webpack:///./app/configs/server-configs.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {module.expports = {\n  distributionMapModule: __webpack_require__(/*! ./components/distribution-map/distribution-map */ \"./app/components/distribution-map/distribution-map.js\"),\n  visualizationMapModule: __webpack_require__(/*! ./components/visualization-map/visualization-map */ \"./app/components/visualization-map/visualization-map.js\"),\n  somModelService: __webpack_require__(/*! ./services/som-model-services */ \"./app/services/som-model-services.js\")\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../usr/local/lib/node_modules/webpack/buildin/module.js */ \"../../../../../usr/local/lib/node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/services/som-model-services.js":
/*!********************************************!*\
  !*** ./app/services/som-model-services.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const serviceName = \"somModelService\";\nmodule.exports.name = serviceName;\n\nconst SERVER_CONFIGS = __webpack_require__(/*! ../configs/server-configs */ \"./app/configs/server-configs.js\")\n\nangular.module(serviceName, []).factory(serviceName, function ($http) {\n  return new somModel($http);\n})\n\nfunction somModel($http) {\n  this.$http = $http;\n}\n\nsomModel.prototype.getFittedModel = function () {\n  let url = SERVER_CONFIGS.getFittedModelBaseUrl + \"/test_01\";\n  return this.$http({\n    url: url,\n    method: \"GET\"\n  }).then(function(response) {\n    // console.log(response);\n    return response.data;\n  }).catch(function(err) {\n    throw err;\n  })\n}\n\nsomModel.prototype.modelCreate = function () { }\n\nsomModel.prototype.modelTrain = function () { }\n\nsomModel.prototype.modelPredict = function () { }\n\n//# sourceURL=webpack:///./app/services/som-model-services.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/distribution-map/distribution-map.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/distribution-map/distribution-map.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"distribution-map .distribution-map {\\n  /* background-color: greenyellow; */\\n  display            : flex;\\n  height             : 100%;\\n  margin-left        : -10px;\\n}\\n\\ndistribution-map .btn-fn {\\n  display    : flex;\\n  font-weight: bold;\\n  color      : #A5ACB4;\\n  cursor     : pointer;\\n  transition : all ease-in 0.2s;\\n  top        : 40px;\\n  z-index    : 3;\\n  right      : 40px;\\n  user-select: none;\\n}\\n\\ndistribution-map .toolbar-btn {\\n  border       : 1px solid #A5ACB4;\\n  border-radius: 2px;\\n  margin-left  : 15px;\\n  padding      : 8px 20px;\\n  cursor       : pointer;\\n  transition: all ease-in 0.2s;\\n  display: flex;\\n  align-items: center;\\n}\\n\\ndistribution-map .active-btn {\\n  color       : #fff;\\n  background  : #4b7def;\\n  border-color: #4b7def;\\n  transition: all ease-in 0.2s;\\n}\\n\\n\\ndistribution-map .map {\\n  /* margin       : 5px;\\n  background-color: pink; */\\n  margin          : 0 10px 10px 10px;\\n  padding         : 10px;\\n  border-radius   : 2px;\\n  background-color: white;\\n}\\n\\ndistribution-map .map-header {\\n  text-align   : center;\\n  padding      : 10px;\\n  border-bottom: 1px solid #edeff3;\\n  margin-bottom: 10px !important;\\n}\\n\\ndistribution-map .map-row {\\n  display     : flex;\\n  /* border   : 1px solid red; */\\n  width       : 100%;\\n  margin-left : 0;\\n  margin-right: 0;\\n}\\n\\ndistribution-map .map-col {\\n  margin         : 5px;\\n  border-radius  : 2px;\\n  position       : relative;\\n  width          : 60px;\\n  height         : 60px;\\n  display        : flex;\\n  align-items    : center;\\n  justify-content: center;\\n  flex-grow      : 1;\\n  /* color       : rgba(255,0,0,0.6);\\n\\tcolor           : rgba(0,255,0,0.6);\\n\\tcolor           : rgba(0,0,255,0.6);\\n\\tcolor           : rgba(255,255,0,0.6);\\n\\tcolor           : rgba(0,255,255,0.6);\\n\\tcolor           : violet;\\n  color          : springgreen; */\\n\\n  /* // */\\n  /* color: #FFFFDD;color: #AAF191;color:#80D385\\\", \\\"#61B385\\\", \\\"#3E9583\\\", \\\"#217681\\\", \\\"#285285\\\", \\\"#1F2D86\\\", \\\"#000086\\\" */\\n}\\n\\ndistribution-map .map-cell {}\\n\\ndistribution-map .map-cell-element {\\n  /* position: absolute;\\n  top        : 0;\\n  bottom     : 0; */\\n  color      : #fff;\\n  font-size  : 10px;\\n}\\n\\ndistribution-map .map-colormap {\\n  width      : 100%;\\n  padding-top: 15%;\\n  position   : relative;\\n}\\n\\ndistribution-map .map-legend>g>text {}\\n\\ndistribution-map .map-legend {\\n  /* display : block;\\n  position: absolute;\\n  top     : 0;\\n  width   : 100%;\\n  height  : 100%; */\\n  height: 10px;\\n  width: 22px;\\n\\n}\\n\\ndistribution-map .map-cell .map-cell-tooltip {\\n  visibility      : hidden;\\n  width           : 120px;\\n  background-color: #555;\\n  color           : #fff;\\n  text-align      : center;\\n  border-radius   : 6px;\\n  padding         : 5px 0;\\n  position        : absolute;\\n  z-index         : 1;\\n  bottom          : 105%;\\n  left            : 50%;\\n  margin-left     : -60px;\\n  opacity         : 0;\\n  transition      : opacity 0.3s;\\n}\\n\\ndistribution-map .map-cell .map-cell-tooltip::after {\\n  content     : \\\"\\\";\\n  position    : absolute;\\n  top         : 100%;\\n  left        : 50%;\\n  margin-left : -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: #555 transparent transparent transparent;\\n}\\n\\ndistribution-map .map-cell:hover .map-cell-tooltip {\\n  visibility: visible;\\n  opacity   : 1;\\n}\\n\\n.switch {\\n  position     : relative;\\n  display      : inline-block;\\n  min-width    : 31px;\\n  height       : 16px;\\n  margin-bottom: 0;\\n}\\n\\n.switch input {\\n  opacity: 0;\\n  width  : 0;\\n  height : 0;\\n}\\n\\n.slider {\\n  position          : absolute;\\n  cursor            : pointer;\\n  top               : 0;\\n  left              : 0;\\n  right             : 0;\\n  bottom            : 0;\\n  background-image  : linear-gradient(to right, #a9a9a9, #bdbdbd);\\n  -webkit-transition: .2s;\\n  transition        : .2s;\\n}\\n\\n.slider:before {\\n  position          : absolute;\\n  content           : \\\"\\\";\\n  height            : 14px;\\n  width             : 14px;\\n  left              : 1px;\\n  bottom            : 1px;\\n  background-color  : white;\\n  -webkit-transition: 0.2s;\\n  transition        : 0.2s;\\n  box-shadow        : 0 1px 3px #0000003b;\\n}\\n\\ninput:checked+.slider {\\n  background-image: linear-gradient(to right, #4b7def, #3058c7);\\n}\\n\\ninput:focus+.slider {\\n  box-shadow: none;\\n}\\n\\ninput:checked+.slider:before {\\n  -webkit-transform: translateX(15px);\\n  -ms-transform    : translateX(15px);\\n  transform        : translateX(15px);\\n}\\n\\n/* Rounded sliders */\\n.slider.round {\\n  border-radius: 34px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/components/distribution-map/distribution-map.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/visualization-map/visualization-map.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/visualization-map/visualization-map.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"visualization-map .visualization-map {\\n  /* background-color: greenyellow; */\\n  display: flex;\\n    height: 100%;\\n}\\nvisualization-map .btn-fn {\\n  display    : flex;\\n  font-weight: bold;\\n  color      : #A5ACB4;\\n  cursor     : pointer;\\n  transition : all ease-in 0.2s;\\n  top        : 40px;\\n  z-index    : 3;\\n  right      : 40px;\\n  user-select: none;\\n}\\n\\nvisualization-map .toolbar-btn {\\n    border       : 1px solid #A5ACB4;\\n    border-radius: 2px;\\n    margin-left  : 15px;\\n    padding      : 8px 20px;\\n    cursor       : pointer;\\n}\\n\\nvisualization-map .active-btn {\\n  color       : #fff;\\n  background  : #4b7def;\\n  border-color: #4b7def;\\n  transition: all ease-in 0.2s;\\n}\\n\\nvisualization-map .map {\\n  margin: 0 10px 10px 10px;\\n  padding: 10px;\\n  border-radius: 2px;\\n  background-color: white;\\n}\\n\\nvisualization-map .map-header {\\n  text-align: center;\\n  padding: 10px;\\n  border-bottom: 1px solid #edeff3;\\n  margin-bottom: 10px !important;\\n}\\n\\nvisualization-map .map-row {\\n  display: flex;\\n  /* border: 1px solid red; */\\n  width: 100%;\\n  margin-left: 0;\\n  margin-right: 0;\\n}\\n\\nvisualization-map .map-col {\\n  margin: 5px;\\n  border-radius: 2px;\\n  position: relative;\\n  \\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  /* flex-grow: 1; */\\n}\\n\\nvisualization-map .map-cell {\\n  border: 1px solid #ccc;\\n  border-radius: 2px;\\n  /* width: 60px;\\n  height: 60px; */\\n  /* padding-top: 100%; */\\n  /* position: relative; */\\n}\\n\\nvisualization-map .map-cell-element {\\n  /* position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0; */\\n  text-align: center;\\n  font-size: 10px;\\n  padding: 5px;\\n}\\n\\nvisualization-map .map-cell-element:hover {\\n  /* border: 2px solid red; */\\n}\\n\\nvisualization-map .map-chart {\\n  width: 60px;\\n  height: 60px;\\n}\\n\\nvisualization-map .map-cell .map-cell-tooltip {\\n  visibility: hidden;\\n  width: 120px;\\n  background-color: #555;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 105%;\\n  left: 50%;\\n  margin-left: -60px;\\n  opacity: 0;\\n  transition: opacity 0.3s;\\n}\\n\\nvisualization-map .map-cell .map-cell-tooltip::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: #555 transparent transparent transparent;\\n}\\n\\nvisualization-map .map-cell:hover .map-cell-tooltip {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n\\nvisualization-map .map-legend-row {\\n  display: flex;\\n  /* border: 1px solid red; */\\n  width: 100%;\\n  margin-left: 0;\\n  margin-right: 0;\\n  vertical-align: middle;\\n}\\n\\nvisualization-map .map-legend-col {\\n  position: relative;\\n  width: 100%;\\n  /* padding-right: 15px;\\n  padding-left: 15px; */\\n  -webkit-flex-basis: 0;\\n  -ms-flex-preferred-size: 0;\\n  flex-basis: 0;\\n  -webkit-box-flex: 1;\\n  -webkit-flex-grow: 1;\\n  -ms-flex-positive: 1;\\n  flex-grow: 1;\\n  max-width: 100%;\\n  \\n  text-align: center;\\n  /* border: 1px solid blue;\\n  padding: 0; */\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/components/visualization-map/visualization-map.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ })

/******/ });