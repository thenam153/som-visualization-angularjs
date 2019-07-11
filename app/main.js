const appName = "somVisualization";

const app = angular.module(appName, [
  'distributionMapModule',
  'visualizationMapModule',
  'somModelService'
]);

app.controller('appController', function ($scope, somModelService) {
  // Demo data
  $scope.dataDemo = {
    distributionMaps: [
      {
        header: "DT",
        rows: [
          {
            cells: [
              { weight: 0.1, scaledWeight: 0.1, label: 1 },
              { weight: 0.15, scaledWeight: 0.15, label: 2 },
              { weight: 0.17, scaledWeight: 0.17, label: 3 }
            ]
          },
          {
            cells: [
              { weight: 0.2, scaledWeight: 0.2, label: 2 },
              { weight: 0.3, scaledWeight: 0.3, label: 3 },
              { weight: 0.44, scaledWeight: 0.44, label: 1 }
            ]
          },
          {
            cells: [
              { weight: 0.5, scaledWeight: 0.5, label: 1 },
              { weight: 0.4, scaledWeight: 0.4, label: 2 },
              { weight: 0.3, scaledWeight: 0.3, label: 1 }
            ]
          }
        ]
      },
      {
        header: "GR",
        rows: [
          {
            cells: [
              { weight: 0.2, scaledWeight: 0.2, label: 1 },
              { weight: 0.3, scaledWeight: 0.3, label: 2 },
              { weight: 0.4, scaledWeight: 0.4, label: 3 }
            ]
          },
          {
            cells: [
              { weight: 0.6, scaledWeight: 0.6, label: 2 },
              { weight: 0.44, scaledWeight: 0.44, label: 3 },
              { weight: 0.5, scaledWeight: 0.5, label: 1 }
            ]
          },
          {
            cells: [
              { weight: 0.7, scaledWeight: 0.7, label: 1 },
              { weight: 0.46, scaledWeight: 0.46, label: 2 },
              { weight: 0.9, scaledWeight: 0.9, label: 1 }
            ]
          }
        ]
      },
      {
        header: "NPHI",
        rows: [
          {
            cells: [
              { weight: 0.3, scaledWeight: 0.3, label: 1 },
              { weight: 0.4, scaledWeight: 0.4, label: 2 },
              { weight: 0.5, scaledWeight: 0.5, label: 3 }
            ]
          },
          {
            cells: [
              { weight: 1, scaledWeight: 1, label: 2 },
              { weight: 0.1, scaledWeight: 0.1, label: 3 },
              { weight: 0.45, scaledWeight: 0.45, label: 1 }
            ]
          },
          {
            cells: [
              { weight: 0.6, scaledWeight: 0.6, label: 1 },
              { weight: 0.6, scaledWeight: 0.6, label: 2 },
              { weight: 0.8, scaledWeight: 0.8, label: 1 }
            ]
          }
        ]
      }
    ],
    visualizationMap: [
      {
        cells: [
          {
            features: [
              { weight: 0.1, scaledWeight: 0.1, header: 'DT' },
              { weight: 0.2, scaledWeight: 0.2, header: 'GR' },
              { weight: 0.3, scaledWeight: 0.3, header: 'NPHI' }
            ],
            label: 1
          },
          {
            features: [
              { weight: 0.15, scaledWeight: 0.15, header: 'DT' },
              { weight: 0.3, scaledWeight: 0.3, header: 'GR' },
              { weight: 0.4, scaledWeight: 0.4, header: 'NPHI' }
            ],
            label: 2
          },
          {
            features: [
              { weight: 0.17, scaledWeight: 0.17, header: 'DT' },
              { weight: 0.4, scaledWeight: 0.4, header: 'GR' },
              { weight: 0.5, scaledWeight: 0.5, header: 'NPHI' }
            ],
            label: 3
          }
        ]
      },
      {
        cells: [
          {
            features: [
              { weight: 0.2, scaledWeight: 0.2, header: 'DT' },
              { weight: 0.6, scaledWeight: 0.6, header: 'GR' },
              { weight: 1, scaledWeight: 1, header: 'NPHI' }
            ],
            label: 2
          },
          {
            features: [
              { weight: 0.3, scaledWeight: 0.3, header: 'DT' },
              { weight: 0.44, scaledWeight: 0.44, header: 'GR' },
              { weight: 0.4, scaledWeight: 0.4, header: 'NPHI' }
            ],
            label: 3
          },
          {
            features: [
              { weight: 0.44, scaledWeight: 0.44, header: 'DT' },
              { weight: 0.5, scaledWeight: 0.5, header: 'GR' },
              { weight: 0.45, scaledWeight: 0.45, header: 'NPHI' }
            ],
            label: 1
          }
        ]
      },
      {
        cells: [
          {
            features: [
              { weight: 0.5, scaledWeight: 0.5, header: 'DT' },
              { weight: 0.7, scaledWeight: 0.7, header: 'GR' },
              { weight: 0.6, scaledWeight: 0.6, header: 'NPHI' }
            ],
            label: 1
          },
          {
            features: [
              { weight: 0.4, scaledWeight: 0.4, header: 'DT' },
              { weight: 0.46, scaledWeight: 0.46, header: 'GR' },
              { weight: 0.6, scaledWeight: 0.6, header: 'NPHI' }
            ],
            label: 2
          },
          {
            features: [
              { weight: 0.3, scaledWeight: 0.3, header: 'DT' },
              { weight: 0.9, scaledWeight: 0.9, header: 'GR' },
              { weight: 0.8, scaledWeight: 0.8, header: 'NPHI' }
            ],
            label: 1
          }
        ]
      }
    ]
  }

  $scope.data = $scope.dataDemo;

  // Distribution map function
  $scope.getDistributionMaps = function (data) {
    return data.distributionMaps;
  }

  $scope.getDistributionMapHeader = function (distributionMap) {
    return distributionMap.header;
  }

  $scope.getDistributionMapRows = function (distributionMap) {
    return distributionMap.rows;
  }

  $scope.getDistributionMapCells = function (row) {
    return row.cells;
  }

  $scope.getDistributionMapWeight = function (cell) {
    return cell.weight;
  }

  $scope.getDistributionMapScaledWeight = function (cell) {
    return cell.scaledWeight;
  }

  $scope.getDistributionMapLabel = function (cell) {
    return cell.label;
  }

  $scope.distributionMapClickFn = function (event, cell) {
    console.log(cell);
  }

  $scope.distributionMapColors = ["#FFFFDD", "#AAF191", "#80D385", "#61B385", "#3E9583", "#217681", "#285285", "#1F2D86", "#000086"];
  $scope.distributionMapColorRange = d3.range(0, 1, 1.0 / ($scope.distributionMapColors.length - 1));
  $scope.distributionMapColorRange.push(1);

  $scope.getDistributionMapColors = function () {
    return $scope.distributionMapColors;
  }

  $scope.distributionMapColorScale = d3.scaleLinear()
    .domain($scope.distributionMapColorRange)
    .range($scope.distributionMapColors)

  // Visualization map function
  $scope.getVisualizationMap = function (data) {
    return data.visualizationMap;
  }

  $scope.getVisualizationMapCells = function (row) {
    return row.cells;
  }

  $scope.getVisualizationMapFeatures = function (cell) {
    return cell.features;
  }

  $scope.getVisualizationMapLabel = function (cell) {
    return cell.label;
  }

  $scope.getVisualizationMapLabels = function (data) {
    let labels = [];
    for (i = 0; i < data.visualizationMap.length; i++) {
      cells = data.visualizationMap[i].cells;
      for (j = 0; j < cells.length; j++) {
        label = cells[j].label;
        if (!labels.includes(label)) {
          labels.push(label)
        }
      }
    }
    return labels;
  }

  $scope.getVisualizationMapFeatureWeight = function (feature) {
    return feature.weight;
  }

  $scope.getVisualizationMapFeatureScaledWeight = function (feature) {
    return feature.scaledWeight;
  }

  $scope.getVisualizationMapFeatureNames = function (data) {
    let featureHeaders = []
    data.visualizationMap[0].cells[0].features.forEach(feature => {
      featureHeaders.push(feature.header);
    });
    return featureHeaders;
  }

  $scope.getVisualizationMapFeatureName = function (feature) {
    return feature.header;
  }

  $scope.visualizationMapClickFn = function (event, cell) {
    console.log(cell);
  }

  $scope.visualizationMapLabelColors = [
    "rgba(255,0,0,0.6)",
    "rgba(0,255,0,0.6)",
    "rgba(0,0,255,0.6)",
    "rgba(255,255,0,0.6)",
    "rgba(0,255,255,0.6)",
    "violet",
    "springgreen"
  ]

  $scope.visualizationMapFeatureColors = [
    'red', 'green', 'blue', 'yellow'
  ]

  $scope.getFittedModel = function () {
    let responseDataPromise = somModelService.getFittedModel();
    responseDataPromise.then((data) => {
      console.log(data);
      $scope.data = data;
    }).catch((err) => {
      console.log(err);
      $scope.data = dataDemo;
    })
  }

})