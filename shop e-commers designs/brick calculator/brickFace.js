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