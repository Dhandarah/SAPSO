<script>
  function truncSpace(X, I, C ,r) {

    var iddown = []

    for (i = 0; i < X.length; i++) {
      if (X[i] < r[0]) {
        iddown[i] = 1
      } else {
        iddown[i] = 0
      }
    }

    var idup = []

    for (i = 0; i < X.length; i++) {
      if (X[i] > r[1]) {
        idup[i] = 1
      } else {
        idup[i] = 0
      }
    }
    
    
    if( iddown.includes(1) == true || idup.includes(1) == true){
        I = 1
        C = 0
    }
    

    for (i = 0; i < iddown.length; i++) {
      if (iddown[i] == 1) {
        X[i] = r[0]
      }
    }
    for (i = 0; i < idup.length; i++) {
      if (idup[i] == 1) {
        X[i] = r[1]
      }
    }


    return [X,I,C]

  }
  
  //teste
  //I = 4
  //C = 5
  
  //X = [5,8,2,3]
  
  //r =[1,2]
  //resultado esperado: X = [2,2,2,2], I = 1 , C = 0
  console.log(truncSpace(X,I,C,r))

  </script>
