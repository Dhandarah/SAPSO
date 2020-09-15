<script>

function updateDir(dir, diversity, I, t, N){
    if(dir > 0 && diversity < t[0]){
        dir = -1
        I = math.ones(N,1)
    }else{
        if(dir < 0 && diversity > t[1]){
            dir = 1
            I = math.zeros(N,1)
        }
    }
    
    return [dir,I]
}
//teste
//dir = 1
//diversity = 1
//I= [0,0,0,0,0]
//t= [2,3,4,5,6]
//N = 5
//console.log(updateDir(dir, diversity, I, t, N))
//resultado [[1],[1],[1],[1],[1]]

</script>
