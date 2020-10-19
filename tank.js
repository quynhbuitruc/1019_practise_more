function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    if (x < 171) {
        document.getElementById("tank").style.left = x + 19 + "px"
    } else {
        document.getElementById("tank").style.left = "0px"
    }
}

function moveLeft() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    if (x > 19) {
        document.getElementById("tank").style.left = x - 19 + "px"
    } else {
        document.getElementById("tank").style.left = "171px"
    }
}

function moveDown() {
    let x = parseInt(document.getElementById("tank").style.top)
    console.log(x)
    if (x < 171) {
        document.getElementById("tank").style.top = x + 19 + "px"
    } else {
        document.getElementById("tank").style.top = "0px"
    }
}

function moveUp() {
    let x = parseInt(document.getElementById("tank").style.top)
    console.log(x)
    if (x > 0) {
        document.getElementById("tank").style.top = x - 19 + "px"
    } else {
        document.getElementById("tank").style.top = "171px"
    }
}