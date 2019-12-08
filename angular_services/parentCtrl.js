
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $http, dataService, globalConstService, apiServiceFactory,
    apiService) {

    //alert(dataService.numberOfEmp)
    $scope.num = dataService.numberOfEmp
    $scope.app_name = globalConstService.app_name
    $scope.result = apiServiceFactory.getPower2(90)
    $scope.result3 = apiService.getPower3(90)
    $scope.todos = []
    $http.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(
            // success
            (resp) => {
                $scope.todos = resp.data
                $scope.todos.splice(10)
            },
            // error
            (err) => {
                alert('error')
                console.log(err)
            }
        )
}
