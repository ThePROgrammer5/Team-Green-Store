var kart = {
    imperfectSeed: 0,
    normalSeed: 0,
    perfectSeed: 0,
};

function addToKart(item, no) {
    kart.item = kart.item + int(no);
}

function order() {
    window.open('mailto:codingplusgaminggmail.com?subject= Team Green Order&body=Order:' + kart);
}