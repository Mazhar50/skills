function reverseString(str){
    var reverse = ""
    for ( var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement= "hello alien ami mifta";
var forAlien = reverseString(statement);

console.log(forAlien);


var ultamatmu = reverseString("ami ekn ulta matmu");
console.log(ultamatmu);