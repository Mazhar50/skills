function reverseString(str){
    var reverse = ""
    for ( var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement= "hello alien ";
var forAlien = reverseString(statement);

console.log(forAlien);


var ultamatmu = reverseString("reverse string on");
console.log(ultamatmu);