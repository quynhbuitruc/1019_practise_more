function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    let y = parseInt(document.getElementById("tank").style.top)
    let Xtreasure = parseInt(document.getElementById("treasure").style.left)
    let Ytreasure = parseInt(document.getElementById("treasure").style.top)
    if (x < 171) {
        if (x == Xtreasure) {
            if (y == Ytreasure) {
                document.getElementById("tank").style.visibility = "hidden"
                document.getElementById("treasure").style.visibility = "hidden"
                document.getElementById("rainBow").style.visibility = "visible"
                document.getElementById("tank").style.left = x + 19 + "px"
            } else {
                document.getElementById("treasure").style.visibility = "visible"
                document.getElementById("tank").style.visibility = "visible"
                document.getElementById("rainBow").style.visibility = "hidden"
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