

const canv = document.getElementById("bg")
// const height = window.innerHeight;
// const width = window.innerWidth;
// canv.height = height;
// canv.width = width;

// const ctx = canv.getContext('2d')

// function draw() {
//     ctx.clearRect(0, 0, width, height)

//     ctx.fillStyle = "#171219"

//     ctx.moveTo(20, 40)
//     ctx.lineTo(40, 20)
//     ctx.lineTo(40, 40)
//     ctx.lineTo(20, 60)
//     ctx.fill()
//     // ctx.moveTo(40, 10)
//     // ctx.lineTo(width - 10, 10)
//     // ctx.lineTo(width - 20, 20)
//     // ctx.lineTo(40, 20)
//     // ctx.fill()

//     window.requestAnimationFrame(draw)
// }
// draw()

// function drawDot(x, y, ctx) {
//     ctx.fillRect(x, y, 2, 2)
// }




let pts = []

function setup() {
    let m = createCanvas(windowWidth, windowHeight, canv)
    strokeWeight(2)
    let gap = 50;
    for (let i = 0; i < width;i+=gap) {
        for (let j = 0; j < height; j+= gap) {
            pts.push(new Character(i, j))
        }
    }
}

function draw() {
    background("#FDFDFD")
    fill("#171219")
    noStroke()
    beginShape()
    //logo 1
    vertex(20, 40)
    vertex(40, 20)
    vertex(40, 40)
    vertex(20, 60)
    // logo2
    // vertex(20, 60)
    // vertex(60, 20)
    // vertex(60, 60)
    // vertex(20, 20)
    // logo 3
    // vertex(20, 60)
    // vertex(60, 20)
    // vertex(60, 40)
    // vertex(20, 80)
    endShape()

    stroke("#636363")
    pts.forEach(pt => {pt.show();pt.update()})
}

class Character {
    constructor(x, y) {
        this.targetPos = createVector(x, y)
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector()
    }
    update() {
        if (this.vel.mag >= 2) {
            this.vel.setMag(1.88)
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)

        this.acc.mult(0)

        this.behaviours()
    }
    show() {
        point(this.pos.x, this.pos.y)
    }
    applyForce(f) {
        this.acc.add(f)
    }
    behaviours() {
        let v = p5.Vector.sub(createVector(mouseX, mouseY), this.pos)
        if (v.mag() < 50) {
          v.mult(-0.01)
          this.applyForce(v)
        }
      let p = p5.Vector.sub(this.pos, this.targetPos)
      p.mult(-0.1)
      this.applyForce(p)
      this.vel.setMag(p.mag())
    }
}