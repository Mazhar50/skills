    function isLeapYear(year){
    const sall = year % 4;
    if(sall == 0){
        console.log("your year is a leap year");
    }
    else{console.log("your year is not a leap year");}
}

let check = isLeapYear(2024);
console.log(check);