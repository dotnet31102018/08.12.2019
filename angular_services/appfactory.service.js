module.factory("apiServiceFactory", function (globalConstService) {

  const result = {}
  result.items = ['a', 'b', 'c']

  result.getPower2 = (x) => x * x

  return result

})