angular.module('ionicApp.services', [])



    .factory('EmployeeService', function($q) {

        var employees = [
            { "id": 1, "firstName": "Dosa", "lastName": "Pandey", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "South", "cellPhone": "9971116886", "officePhone": "9971116886", "email": "hariompandey21@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "James_King.jpg", "twitterId": "@hariompandey", "blog": "http://coenraets.org" },
            { "id": 2, "firstName": "Golgappa", "lastName": "Omer", "managerId": 1, "managerName": "Hariom Pandey", "reports": 2, "title": "VP of Marketing", "department": "Chinese", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "shobhit@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org" },
            { "id": 3, "firstName": "CholeyBhatoore ", "lastName": "Beranwal", "managerId": 1, "managerName": "Hariom Pandey", "reports": 0, "title": "CFO", "department": "North", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "prateek@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org" },
            { "id": 4, "firstName": "Idli", "lastName": "Khan", "managerId": 1, "managerName": "Hariom Pandey", "reports": 3, "title": "VP of Engineering", "department": "South", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "rashid@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org" },
            { "id": 5, "firstName": "Pavbhaji", "lastName": "Gupta", "managerId": 1, "managerName": "Shobhit Omer", "reports": 2, "title": "VP of Sales", "department": "Chinese", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "piyush@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org" },
            { "id": 6, "firstName": "ShahiPaneer", "lastName": "Yadav", "managerId": 4, "managerName": "Hariom Pandey", "reports": 0, "title": "QA Manager", "department": "North", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pankaj@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org" },
            { "id": 7, "firstName": "Biriyani", "lastName": "Varshney", "managerId": 4, "managerName": "Rashid Khan", "reports": 0, "title": "Software Architect", "department": "Chinese", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "prashant@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org" },
            { "id": 8, "firstName": "Kabab", "lastName": "Mishra", "managerId": 2, "managerName": "Rashid Khan", "reports": 0, "title": "Marketing Manager", "department": "North", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "kk@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org" },
            { "id": 9, "firstName": "Chiken", "lastName": "Kumar", "managerId": 2, "managerName": "Shobhit Omer", "reports": 0, "title": "Marketing Manager", "department": "Chinese", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "kaushik@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org" },
            { "id": 10, "firstName": "KadhaiPaneer", "lastName": "Malik", "managerId": 5, "managerName": "Hariom Pandey", "reports": 0, "title": "Sales Representative", "department": "North", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "gurmeet@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org" },
            { "id": 11, "firstName": "Uttpam", "lastName": "Singh", "managerId": 5, "managerName": "Kaushik Kumar", "reports": 0, "title": "Sales Representative", "department": "South", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "rituraj@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org" },
            { "id": 12, "firstName": "NanRoti", "lastName": "Gupta", "managerId": 4, "managerName": "Rituraj Singh", "reports": 0, "title": "Software Architect", "department": "North", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "mukesh@bulao.com", "city": "Gurgaon, Delhi-NCR", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org" }
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = employees[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
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
            }

        }

    });