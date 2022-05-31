var num = 0;

window.onload = function () {
        var name = prompt("Vad är ditt namn?");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bageri";
}

var cookie = document.getElementById("Baguetter");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Didrik level";
    }

    
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Gustav Level";
    }

    
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Noah Level";
    }

    
    if(num >= 25000) {
        num += 1000;
        upgradeLevel.innerHTML = "Sebastian Level";
    }
}
