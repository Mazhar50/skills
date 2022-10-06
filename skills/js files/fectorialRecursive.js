function fect(n) {
    var i = 1;
    var fect = 1;
    while (i <= n) {
        fect = fect * i;
        i++;
    }
    return fect;
}

var result = fect(23);
console.log(result);

//fectorial recursive

function fectRe(n) {
    if (n == 0) {
        return 1;       
    } else {
        return n * fectRe(n-1);
    }
}

var result = fectRe(5);
console.log(result);


//practice 1.0

function recursive(n) {
    if (n == 0) {
        return 1;
    } else {
      return  n * recursive(n-1);
    }
}

var okbye = recursive(10);
console.log(okbye);


// practice 2.0

function cursivereverse(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * cursivereverse(n-1);
        
    }
}

var abal = cursivereverse(91);
console.log(abal);


//practice 3.0

function okcursive(n) {
    if (n ==0) {
        return 1;
    } else {
        return n * okcursive( n-1 );
    }
}
 var aminai = okcursive( 03);
 console.log(aminai);

 //practice 4.0

 function retruncur(n) {
    if (n ==0) {
        return 1;
    } else {
        return n * retruncur(n-1);
    }
 }

 var why = retruncur( 03);
 console.log(why);

 //practice 5.0

 function fectory(n) {
    if (n == 0 ) {
        return 1;
    } else {
        return n * fectory(n-1);
    }
 }

 var whyu = fectory( 03);
 console.log(whyu);

 //practice section end of 6.0

 function nobe(n) {
    if (n == 0  ) {
        return 1;
    } else {
        return n * nobe (n - 1);
    }
 }

var nobe1 = nobe(33);
console.log(nobe1);

