angular.module('directory.controllers', [])
.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function () {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
            $state.go('tab.dash');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('MainController', ['$scope', '$location',
  function($scope, $location) {

    console.log('MainController');

    $scope.goTo = function(page) {
      console.log('Going to ' + page);
      $scope.sideMenuController.toggleLeft();
      $location.url('/' + page);
    };

  }
])

.controller('HomeController', ['$scope', '$location',
  function($scope, $location) {

    console.log('HomeController');
    
    $scope.enableBackButton = false;

    $scope.navTitle = 'Home Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }];

    $scope.rightButtons = [];

  }
])

.controller('AboutController', ['$scope', '$location',
  function($scope, $location) {

    console.log('AboutController');
    
    $scope.enableBackButton = false;
    
    $scope.navTitle = 'About Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }];

    $scope.rightButtons = [];

  }
])

    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }

        $scope.search = function () {
            EmployeeService.findByName($scope.searchKey).then(function (employees) {
                $scope.employees = employees;
            });
        }

        var findAllEmployees = function() {
            EmployeeService.findAll().then(function (employees) {
                $scope.employees = employees;
            });
        }

        findAllEmployees();

    })

    .controller('EmployeeDetailCtrl', function ($scope, $stateParams, EmployeeService) {
        EmployeeService.findById($stateParams.employeeId).then(function(employee) {
            $scope.employee = employee;
        });
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
        EmployeeService.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
    });
