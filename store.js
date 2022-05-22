var total = 0;

var kart = {
    imperfectSeed: 0,
    normalSeed: 0,
    perfectSeed: 0,
};

var stock = {
    
}

function orderN() {
    var orderT;
    if(orderT == null || undefined || "") {
        orderT = 0;
    }
    orderT = int(orderT) + 1;
    return orderT
}

function recipt(rec) {
    if(confirm("Would you like your recipt?")) {
        alert(rec);
        alert("Thank you for shoping with us, have a grate day and come back soon!");
    }
    else {
        alert("Ok, thank you for shoping with us, have a grate day and come back soon!");
    }
}

function addToKart(item) {
    var number = prompt("How many would you like to order?");
    kart.item = kart.item + number;
    var cost = stock.item.price; // calculates the cost of item in dollars, cost in cents / 100 = cost in dollars
    total = total + cost; // add the items cost to the total
}

function order() {
    //var orderN = orderN();
    alert("Your total is: $" + total);
    recipt(JSON.stringify(kart));
    alert("To complete order, send $" + JSON.stringify(total) + " in CASH to: somthing");
    window.open('mailto:codingplusgaming@gmail.com?subject= Team Green Order&body=Order:' + JSON.stringify(kart));
}
