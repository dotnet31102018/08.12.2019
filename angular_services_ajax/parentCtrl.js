
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $http, dataService, globalConstService, apiService) {

    $scope.dataService = dataService
    apiService.getTodos()
}
