function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    if (x == 95) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.left = x + 19 + "px"
    } else if (x < 171) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("tank").style.left = x + 19 + "px"
    } else {
        document.getElementById("tank").style.left = "0px"
    }
}

function moveLeft() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    if (x == 95) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.left = x - 19 + "px"
    } else if (x > 0) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("tank").style.left = x - 19 + "px"
    } else {
        document.getElementById("tank").style.left = "171px"
    }
}

function moveUp() {
    let y = parseInt(document.getElementById("tank").style.top)
    console.log(y)
    if (y == 95) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.top = y - 19 + "px"
    } else if (y > 0) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("tank").style.top = y - 19 + "px"
    } else {
        document.getElementById("tank").style.top = "171px"
    }
}