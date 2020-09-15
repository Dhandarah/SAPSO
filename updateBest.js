<script>


function updateBest(X, XFIT, P, PFIT, G){
    if (XFIT < PFIT){
        P = X
        PFIT = XFIT
        if(XFIT < G.XFIT){
            G.X = X
            console.log(G)
            G.XFIT = XFIT
        }
    }
    return  [P,PFIT,G] 
}

//teste
/*
X = [1,2,3]
P = [2,3,4]
XFIT = 2
PFIT = 3

 var G = {
   'X': [1,2,4],        
   'XFIT': 2 
 }


console.log(updateBest(X,XFIT,P,PFIT,G))
*/
//resultado : [1,2,3]     2    G
</script>
