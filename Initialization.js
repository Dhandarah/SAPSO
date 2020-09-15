<script>

	function sphere(x)
  {
    return math.multiply(x,math.ctranspose(x))
  }
  
  //Teste sphere
  //var x = [[1,2],[3,4]]
  ///console.log(x)
  
  //var z = []
  //z = sphere(x)
  // console.log(z)
  
  

function initialization(n ,d, r){
  var rvalues = [];
  for(var i=0; i<n; i++) {
      rvalues[i] = [];
      for(var j=0; j<d; j++) {
          rvalues[i][j] = math.random();          
      }
  }
  
  
  return math.add(math.multiply(r[0],rvalues),math.multiply(math.add(1,math.multiply(-1,rvalues)),r[1]))
  
}

//Teste initialization
//var r = [[1,1],[2,2]]
//console.log(initialization(2,2,r))
