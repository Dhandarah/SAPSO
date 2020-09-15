<script>
function truncGrad(G, GRADMAX){
     
    var iddown = []
   
    for(i= 0 ; i< G.length ; i++){
      if(G[i] < -GRADMAX){
          iddown[i] = 1
      }else{
          iddown[i] = 0
      }
  }
      
    var idup = []
    
    for(i= 0 ; i< G.length ; i++){
      if(G[i] > GRADMAX){
          idup[i] = 1
      }else{
          idup[i] = 0
      }
  }
   
  for(i= 0 ; i< iddown.length ; i++){
      if(iddown[i] == 1){
          G[i] = -GRADMAX
      }
  }   
    for(i= 0 ; i< idup.length ; i++){
      if(idup[i] == 1){
          G[i] = GRADMAX
      }
  }
     
     
    return G

}
//teste
//g = [8,-4,9,2,6,-1]

//grad = 7

//console.log(truncGrad(g, grad))
//resposta =  [7, -4, 7, 2, 6, -1]

</script>
