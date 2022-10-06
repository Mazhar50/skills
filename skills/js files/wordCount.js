var speech ="I am  a good  persone. I can cross       my limit";
    var space = 0;
for( var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char== " " && speech[i-1] != " "){
        space++;
    }
}
console.log(space);









//word and white space count(practice)

var kotha = "hey there I  am mifta  and for my  goal I can  cross my limit";
    var wordcount = 0;
for( i = 0; i < kotha.length; i++){
    var okkhor = kotha[i];
    if(okkhor == " " && kotha[i-1] != " " ){
        wordcount++;
    }
}

console.log(wordcount);