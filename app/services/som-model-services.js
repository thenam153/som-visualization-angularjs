const serviceName = "somModelService";
module.exports.name = serviceName;

const SERVER_CONFIGS = require("../configs/server-configs")

angular.module(serviceName, []).factory(serviceName, function ($http) {
  return new somModel($http);
})

function somModel($http) {
  this.$http = $http;
}

somModel.prototype.getFittedModel = function () {
  let url = SERVER_CONFIGS.getFittedModelBaseUrl + "/test_01";
  return this.$http({
    url: url,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    return response.data;
  }).catch(function(err) {
    throw err;
  })
}

somModel.prototype.modelCreate = function () { }

somModel.prototype.modelTrain = function () { }

somModel.prototype.modelPredict = function () { }