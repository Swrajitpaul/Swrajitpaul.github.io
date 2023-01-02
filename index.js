setTimeout(headertwo, 800)
setTimeout(headerthree, 1500)
setTimeout(lettergray, 50)
setTimeout(navigation, 100)

function letter() {
    document.getElementById("letter").style.color = "salmon"
}

function lettergray() {
    $('#letter').delay(1700).fadeIn(100).fadeOut(100).fadeIn(150).fadeOut(150).fadeIn(200);
}

function headertwo() {
    document.getElementById("headertwo").style.color = "salmon"
}

function headerthree() {
    document.getElementById("headerthree").style.color = "salmon"
}

function navigation() {
    $("#navigation").delay(2000).slideDown(2000);
    $("footer").delay(3000).slideDown(2000);
}