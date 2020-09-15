 var p = {
    'X': [[1,2,3,4],
          [5,6,7,8]
    ],
    'XFIT': [
      [4, 2],
      [3, 1]
    ]
  }

  function getBestGlobal(p) {
    return G = {
      'X': math.row(p.X, showLine(math.min(p.XFIT), p.XFIT))[0],        
      'XFIT': math.min(p.XFIT) 
    }
  }
  //console.log(getBestGlobal(p))
  //console.log( p.XFIT.indexOf(1)) 
  function showLine(n,array){
  // acha a linha do numero na matriz
  // função criada a mais por necessidade em getBestGlobal
      for (var i = 0; i < array.length; i++) {
          for (var x = 0; x < array[i].length; x++) {
              if (array[i][x] === n) {
                  k = i      
              }
          }
      }
      return k
  }
  
  console.log(getBestGlobal(p))
  //console.log(p.XFIT.length)
  /*
  function G = getBestGlobal(p)
      [fit, i] = min(p.XFIT);
      G = struct('X', p.X(i, :), 'XFIT', fit);
      disp("aqui")
      disp(p.X(i,:))
  end
  */
