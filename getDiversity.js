<script>

function getDiversity(X, L, n){
    avg = math.mean(X,0)
    var temp = X.slice(0,X.length)
    
    for(i = 0; i < X.length ; i++){
        for(j = 0; j < X[i].length; j++){
            temp[i][j] = temp[i][j] - avg[j]            
        }
    }  
    
    d = math.sum(math.sqrt(math.dotMultiply(temp, temp).map(r => r.reduce((a, b) => a + b))))/(n * L) 
    return d
}
//teste
//X = [[1,2,3,4,5],[2,3,4,5,6]]
//console.log(getDiversity(X,2,2))
//resultado : 0.559016

</script>
