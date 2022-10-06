

function GetArraySum(number) {
            
        var sum = 0;

        for( var i = 0; i < number.length; i++){
        var element =number[i];
        sum = sum + element;
        }
        return sum;
}

var number = [24, 23, 34, 54, 65, 64, 23, 76];
var result = GetArraySum(number);

console.log("Total of the number is :", result);


var Total = GetArraySum([23,56,12,46, 57]);

console.log("Total of the number is :", Total);

var SubTotal = GetArraySum( [11, 22, 3, 44, 55,66,66,66]);

console.log("Subtotal number is", SubTotal);