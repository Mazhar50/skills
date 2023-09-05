function myFunction() {
    var brick = 75;
    var numBricks = document.getElementById("numBricks").value;
    var e = document.getElementById("brickFace");
    var faceBrick = e.options[e.selectedIndex].value;
    if (faceBrick === "high") {
        document.getElementById("total").innerHTML = (numBricks * brick);
    } else if (faceBrick === "wide") {	document.getElementById("total").innerHTML = (numBricks * (brick * 1.5));
    } else {
        document.getElementById("total").innerHTML = (numBricks * (brick * 3));
    };
    } 

    function double() {
        var main = 100;
        var totalacc = document.getElementById("totalaccounts").value;
        var a = document.getElementById("profile");
        var profile = a.options[a.selectedIndex].value;
        if (profile == "high") {
            document.getElementById("total").innerHTML = (totalacc * main);            
        }
        else if (profile === "wide") {  document.getElementById( "total").innerHTML = (totalacc * (main * 1 ));
        } else {
            document.getElementById("total").innerHTML = ( totalacc * (main *2));
            
        };
    }