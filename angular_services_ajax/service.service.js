module.service("apiService", function (globalConstService, dataService, $http) {

  this.getTodos = () => {
    $http.get(globalConstService.url)
      .then(
        // success
        (resp) => {
          dataService.todos = resp.data
          console.log(resp.data)
        },
        // error
        (err) => {
          alert('error')
          console.log(err)
        }
      )
  }

})