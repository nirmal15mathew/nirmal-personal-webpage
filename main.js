const canv = document.getElementById("bg")
const height = window.innerHeight;
const width = window.innerWidth;
canv.height = height;
canv.width = width;

const ctx = canv.getContext('2d')

function draw() {
    ctx.clearRect(0, 0, width, height)

    ctx.fillStyle = "#171219"

    ctx.moveTo(20, 40)
    ctx.lineTo(40, 20)
    ctx.lineTo(40, 40)
    ctx.lineTo(20, 60)
    ctx.fill()
    // ctx.moveTo(40, 10)
    // ctx.lineTo(width - 10, 10)
    // ctx.lineTo(width - 20, 20)
    // ctx.lineTo(40, 20)
    // ctx.fill()

    window.requestAnimationFrame(draw)
}
draw()

function drawDot(x, y, ctx) {
    ctx.fillRect(x, y, 2, 2)
}