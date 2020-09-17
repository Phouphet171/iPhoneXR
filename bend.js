function dispprice(capacity){
    if(capacity == 64){
        document.getElementById("pricing").innerHTML = "₹ 49,900";
    }
    else if(capacity == 128){
        document.getElementById("pricing").innerHTML = "₹ 57,800"
    }
}

function dispiphone(color){
    var model = document.getElementById("iphonecolor");
    if(color == 1){
        model.src = "src/1.png";
    }
    else if(color == 2){
        model.src = "src/2.png";
    }
    else if(color == 3){
        model.src = "src/3.png";
    }
    else if(color == 4){
        model.src = "src/4.png";
    }
    else if(color == 5){
        model.src = "src/5.png";
    }
    else if(color == 6){
        model.src = "src/6.png";
    }
}
