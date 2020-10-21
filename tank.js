function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x < 190) {
        if (x == 76) {
            if (y == 95) {
                document.getElementById("tank").style.visibility = "hidden"
                document.getElementById("treasure").style.visibility = "hidden"
                document.getElementById("rainBow").style.visibility = "visible"
                document.getElementById("tank").style.left = x + 19 + "px"
            } else {
                document.getElementById("treasure").style.visibility = "visible"
                document.getElementById("tank").style.visibility = "visible"
                document.getElementById("rainBow").style.visibility = "hidden"
                document.getElementById("tank").style.left = x + 19 + "px"
            }
        } else {
            document.getElementById("treasure").style.visibility = "visible"
            document.getElementById("tank").style.visibility = "visible"
            document.getElementById("rainBow").style.visibility = "hidden"
            document.getElementById("tank").style.left = x + 19 + "px"
        }
    } else {
        document.getElementById("tank").style.left = "0px"
    }
}

function moveLeft() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (x > 0) {
        if (x == 114) {
            if (y == 95) {
                document.getElementById("tank").style.visibility = "hidden"
                document.getElementById("treasure").style.visibility = "hidden"
                document.getElementById("rainBow").style.visibility = "visible"
                document.getElementById("tank").style.left = x - 19 + "px"
            } else {
                document.getElementById("treasure").style.visibility = "visible"
                document.getElementById("tank").style.visibility = "visible"
                document.getElementById("rainBow").style.visibility = "hidden"
                document.getElementById("tank").style.left = x - 19 + "px"
            }
        } else {
            document.getElementById("treasure").style.visibility = "visible"
            document.getElementById("tank").style.visibility = "visible"
            document.getElementById("rainBow").style.visibility = "hidden"
            document.getElementById("tank").style.left = x - 19 + "px"
        }
    } else {
        document.getElementById("tank").style.left = "190px"
    }
}

function moveUp() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (y > 0) {
        if (y == 114) {
            if (x == 95) {
                document.getElementById("tank").style.visibility = "hidden"
                document.getElementById("treasure").style.visibility = "hidden"
                document.getElementById("rainBow").style.visibility = "visible"
                document.getElementById("tank").style.top = y - 19 + "px"
            } else {
                document.getElementById("treasure").style.visibility = "visible"
                document.getElementById("tank").style.visibility = "visible"
                document.getElementById("rainBow").style.visibility = "hidden"
                document.getElementById("tank").style.top = y - 19 + "px"
            }
        } else {
            document.getElementById("treasure").style.visibility = "visible"
            document.getElementById("tank").style.visibility = "visible"
            document.getElementById("rainBow").style.visibility = "hidden"
            document.getElementById("tank").style.top = y - 19 + "px"
        }
    } else {
        document.getElementById("tank").style.top = "190px"
    }
}

function moveDown() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    if (y < 190) {
        if (y == 76) {
            if (x == 95) {
                document.getElementById("tank").style.visibility = "hidden"
                document.getElementById("treasure").style.visibility = "hidden"
                document.getElementById("rainBow").style.visibility = "visible"
                document.getElementById("tank").style.top = y + 19 + "px"
            } else {
                document.getElementById("treasure").style.visibility = "visible"
                document.getElementById("tank").style.visibility = "visible"
                document.getElementById("rainBow").style.visibility = "hidden"
                document.getElementById("tank").style.top = y + 19 + "px"
            }
        } else {
            document.getElementById("treasure").style.visibility = "visible"
            document.getElementById("tank").style.visibility = "visible"
            document.getElementById("rainBow").style.visibility = "hidden"
            document.getElementById("tank").style.top = y + 19 + "px"
        }
    } else {
        document.getElementById("tank").style.top = "0px"
    }
}