function init(N, DIM, RANGE, VMAX, callback){
    X = initialization(N, DIM, RANGE)
    XFIT = initFitness(X, N, callback)
    V = initialization(N, DIM, [-VMAX, VMAX])
    
    I = math.zeros(N, 1)
    C = math.zeros(N, 1)
    
    var p = {
  'X': X,        
  'XFIT': XFIT,  
  'V': V,       
  'P': X,        
  'PFIT': XFIT, 
  'OLDXFIT': XFIT,
  'I': I, 
  'C': C
  }
  return p
}

//teste init
k = 1
N = 20
DIM = 10
RANGE = [-47.5, 47.5]
VMAX = k * (RANGE[1] - RANGE[0]) / 2;
callback = sphere

console.log(init(N, DIM, RANGE, VMAX, sphere))
console.log("Oi")
