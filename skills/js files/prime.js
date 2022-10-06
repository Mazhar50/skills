var n = 33;



function isPrime(n){
    for(i = 2; i < n ; i++){
        console.log(i, n % i);
        if (n%i == 0){
           return"not a prime number";
        } 
        if ( n = 0) {
            return "your number is a prime number "
        }
    }
}

var result = isPrime(139);
console.log(result);