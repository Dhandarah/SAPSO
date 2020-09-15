function initFitness(X, N, callback){
  var fit = []
  fit = math.zeros(1, N)
  for(i= 0 ; i< N ; i++){
      fit[i] = callback(math.row(X, i)[0])
  }
  return fit
}
var x = [[6],[7]]
var r = [1,2]
var res = []
res = initFitness(x, 2, sphere)

//teste iniFitness
//console.log(res)
//window.alert(res)
