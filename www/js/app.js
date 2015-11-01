angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "menu.html",
        controller: 'AppCtrl'
    })

	.state('app.splash', {
	    url: '/',
	    templateUrl: 'splash.html',
	    controller: 'SplashController'
	})

    .state('app.chinese', {
        url: "/chinese",
        views: {
            'menuContent': {
                templateUrl: "chinese.html",
                controller: 'chineseCtrl'
            }
        }
    })

    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "search.html",
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.browse', {
        url: "/browse",
        views: {
            'menuContent': {
                templateUrl: "browse.html",
                 controller: 'browseCtrl'
            }
        }
    })
    .state('app.playlists', {
        url: "/playlists",
        views: {
            'menuContent': {
                templateUrl: "playlists.html",
                controller: 'PlaylistsCtrl'
            }
        }
    })

    .state('app.single', {
        url: "/playlists/:playlistId",
        views: {
            'menuContent': {
                templateUrl: "playlist.html",
                controller: 'PlaylistCtrl'
            }
        }
    })

  .state('app.login-into-menucontent', {
      url: "/login-into-menucontent",
      views: {
          'menuContent': {
              templateUrl: "login.html",
              controller: 'LoginCtrl'
          }
      }
  })

	.state('login', {
	    url: "/login",
	    templateUrl: "login.html",
	    controller: 'LoginCtrl'
	})


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');

})

.controller('AppCtrl', function ($scope) {
})

.controller('PlaylistsCtrl', function ($scope, EmployeeService) {

    var findAllEmployees = function () {
        EmployeeService.findAll().then(function (employees) {
          
            $scope.playlists = employees;
        });
    }
    findAllEmployees();



})

.controller('PlaylistCtrl', function ($scope, $stateParams, EmployeeService) {

       
    var findAllEmployeesid = function () {
        EmployeeService.findById($stateParams.playlistId).then(function (employee) {
            //alert(JSON.stringify(employee));
            $scope.playlist = employee;

        });
    }
    findAllEmployeesid();
})

.controller('browseCtrl', function ($scope, $stateParams, EmployeeService) {

    var findbydepartment = function () {
        EmployeeService.findByDepartment("South").then(function (employee) {
            //alert(JSON.stringify(employee));
            $scope.browse = employee;

        });
    }
    findbydepartment();

})

.controller('SearchCtrl', function ($scope, $stateParams, EmployeeService) {

    var findbydepartment = function () {
        EmployeeService.findByDepartment("North").then(function (employee) {
            //alert(JSON.stringify(employee));
            $scope.browse1 = employee;

        });
    }
    findbydepartment();

})

.controller('chineseCtrl', function ($scope, $stateParams, EmployeeService) {

    var findbydepartment1 = function () {
        EmployeeService.findByDepartment("Street").then(function (employee) {
            //alert(JSON.stringify(employee));
            $scope.browse2 = employee;

        });
    }
    findbydepartment1();

})
.controller('LoginCtrl', function ($scope, $state) {

    $scope.LogIn = function (user) {
        $state.go('app.playlists');
    };

})

 .factory('EmployeeService', function ($q) {

     var employees = [
            { "id": 1, "firstName": "Dosa", "lastName": "Pandey", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "South", "cellPhone": "9971116886", "officePhone": "9971116886", "email": "hariompandey21@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "alooparatha.jpg", "twitterId": "@hariompandey", "blog": "dosa.jpg" },
            { "id": 2, "firstName": "Golgappa", "lastName": "Omer", "managerId": 1, "managerName": "Hariom Pandey", "reports": 2, "title": "VP of Marketing", "department": "Street", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "shobhit@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "golgappesmall.jpg", "twitterId": "@fakejtaylor", "blog": "golgappe.jpg" },
            { "id": 3, "firstName": "CholeyBhatoore ", "lastName": "Beranwal", "managerId": 1, "managerName": "Hariom Pandey", "reports": 0, "title": "CFO", "department": "North", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "prateek@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "choleybhatoresmall.jpg", "twitterId": "@fakeelee", "blog": "bhatoore.jpg" },
            { "id": 4, "firstName": "Idli", "lastName": "Khan", "managerId": 1, "managerName": "Hariom Pandey", "reports": 3, "title": "VP of Engineering", "department": "South", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "rashid@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "idlismall.jpg", "twitterId": "@fakejwilliams", "blog": "idli.jpg" },
            { "id": 5, "firstName": "Pavbhaji", "lastName": "Gupta", "managerId": 1, "managerName": "Shobhit Omer", "reports": 2, "title": "VP of Sales", "department": "Street", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "piyush@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "pavbhajismall.jpg", "twitterId": "@fakermoore", "blog": "pavbhaji.jpg" },
            { "id": 6, "firstName": "ShahiPaneer", "lastName": "Yadav", "managerId": 4, "managerName": "Hariom Pandey", "reports": 0, "title": "QA Manager", "department": "North", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pankaj@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "shahipaneersmall.jpg", "twitterId": "@fakepjones", "blog": "shaipaneer.jpg" },
            { "id": 7, "firstName": "Biriyani", "lastName": "Varshney", "managerId": 4, "managerName": "Rashid Khan", "reports": 0, "title": "Software Architect", "department": "Street", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "prashant@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "biriyanismall.jpg", "twitterId": "@fakepgates", "blog": "biriyani.jpg" },
            { "id": 8, "firstName": "Kabab", "lastName": "Mishra", "managerId": 2, "managerName": "Rashid Khan", "reports": 0, "title": "Marketing Manager", "department": "North", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "kk@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "kababsmall.jpg", "twitterId": "@fakelwong", "blog": "kabab.jpg" },
            { "id": 9, "firstName": "Chiken", "lastName": "Kumar", "managerId": 2, "managerName": "Shobhit Omer", "reports": 0, "title": "Marketing Manager", "department": "Street", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "kaushik@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "chickensmall.jpg", "twitterId": "@fakegdonovan", "blog": "chiken.jpg" },
            { "id": 10, "firstName": "KadhaiPaneer", "lastName": "Malik", "managerId": 5, "managerName": "Hariom Pandey", "reports": 0, "title": "Sales Representative", "department": "North", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "gurmeet@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "kadhaipaneersmall.jpg", "twitterId": "@fakekbyrne", "blog": "kadhaipaneer.jpg" },
            { "id": 11, "firstName": "Uttpam", "lastName": "Singh", "managerId": 5, "managerName": "Kaushik Kumar", "reports": 0, "title": "Sales Representative", "department": "South", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "rituraj@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "utpansmall.jpg", "twitterId": "@fakeajones", "blog": "utpam1.jpg" },
            { "id": 12, "firstName": "alooparatha", "lastName": "Gupta", "managerId": 4, "managerName": "Rituraj Singh", "reports": 0, "title": "Software Architect", "department": "North", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "mukesh@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "nansmall.jpg", "twitterId": "@fakeswells", "blog": "alooparatha.jpg" }
        ];

        
     // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
     // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
     // service with a JSON service that gets its data from a remote server without having to changes anything
     // in the modules invoking the data service since the api is already async.

     return {
         findAll: function () {
             var deferred = $q.defer();
             deferred.resolve(employees);
             return deferred.promise;
         },

         findById: function (employeeId) {
             var deferred = $q.defer();
             var employee = employees[employeeId - 1];
             deferred.resolve(employee);
             return deferred.promise;
         },

         findByName: function (searchKey) {
             var deferred = $q.defer();
             var results = employees.filter(function (element) {
                 var fullName = element.firstName + " " + element.lastName;
                 return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
             });
             deferred.resolve(results);
             return deferred.promise;
         },

         findByManager: function (managerId) {
             var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
             deferred.resolve(results);
             return deferred.promise;
         },
         findByDepartment: function (department) {
             var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return department === element.department;
                    });
             deferred.resolve(results);
             return deferred.promise;
         }

     }

 });