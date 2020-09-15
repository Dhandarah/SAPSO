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

//teste
//x0 = [6,4,9,7,3,1]
//console.log(getGradient(x0, sphere))

</script>
