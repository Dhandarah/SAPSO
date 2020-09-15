<script>

function sphere(x)
{
    return math.multiply(x,math.ctranspose(x))
}

function getGradient(x0, callback){
    g = math.zeros(math.size(x0))
    fx0 = callback(x0)
    step = 0.00001
    for (var i = 0; i < x0.length; i++) {
        var xli = x0.slice(0,x0.length) // faz a copia de x0 para xli
        xli[i] = x0[i] + step   
        g[i] = (callback(xli) - fx0)/step     
    }
    
    return g
}


function initGrad(X, N ,D , callback){
    
    G = math.zeros(N,D)
 
  for (i=0; i<N; i++){
        grad = getGradient(math.row(X,i)[0], callback )
        for (j=0; j<D; j++){
            G._data[i][j] = grad[j]
       }
    }
   
   
   return G._data
    
}

//teste
//X = [[8,4,3,8,9],[1,7,3,8,9]]
//N = 2
//D = 5
//console.log(initGrad(X,N,D,sphere))
//resultado 16.0000    8.0000    6.0000   16.0000   18.0000
//           2.0000   14.0000    6.0000   16.0000   18.0000



</script>
