function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x == 95 & y == 57) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("treasure").style.visibility = "hidden"
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.left = x + 19 + "px"
    } else if (x < 171) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("treasure").style.visibility = "visible"
        document.getElementById("tank").style.left = x + 19 + "px"
        document.getElementById("tank").style.top = y + "px"
    } else {
        document.getElementById("tank").style.left = "0px"
        document.getElementById("tank").style.top = y + "px"
    }
}

function moveLeft() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x == 95 & y == 57) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("treasure").style.visibility = "hidden"
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.left = x - 19 + "px"
    } else if (x > 0) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("treasure").style.visibility = "visible"
        document.getElementById("tank").style.left = x - 19 + "px"
        document.getElementById("tank").style.top = y + "px"
    } else {
        document.getElementById("tank").style.left = "171px"
        document.getElementById("tank").style.top = y + "px"
    }
}

function moveUp() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x == 95 & y == 57) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("treasure").style.visibility = "hidden"
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.top = y + 19 + "px"
    } else if (y > 0) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("treasure").style.visibility = "visible"
        document.getElementById("tank").style.top = y - 19 + "px"
        document.getElementById("tank").style.left = x + "px"
    } else {
        document.getElementById("tank").style.top = "171px"
        document.getElementById("tank").style.left = x + "px"
    }
}

function moveDown() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x == 95 & y == 57) {
        document.getElementById("tank").style.visibility = "hidden" 
        document.getElementById("treasure").style.visibility = "hidden"
        document.getElementById("rainBow").style.visibility = "visible"
        document.getElementById("tank").style.top = y + 19 + "px"
    } else if (y < 171) {
        document.getElementById("rainBow").style.visibility = "hidden"
        document.getElementById("tank").style.visibility = "visible"
        document.getElementById("treasure").style.visibility = "visible"
        document.getElementById("tank").style.top = y + 19 + "px"
        document.getElementById("tank").style.left = x + "px"
    } else {
        document.getElementById("tank").style.top = "0px"
        document.getElementById("tank").style.left = x + "px"
    }
}