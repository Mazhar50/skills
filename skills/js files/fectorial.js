// fectorial on for loop

function fect(num) {
    var fectorial = 1;
    for(i= 1; i <= num; i++){
        fectorial = fectorial * i;
    } 
    return fectorial ;

}
var okbye = fect(10);
console.log(okbye);


// fectorial on while loop

    function fectorialOnWhile(n) {
        var i = 1;
    fect = 1;
    while (i <= n) {
        fect = fect * i;
        i++;    
    }
    return fect;
}

var result = fectorialOnWhile(5);
console.log(result);