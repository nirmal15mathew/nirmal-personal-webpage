

export class Renderer {
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    constructor(ctx) {
        this.ctx = ctx
        this.strokeWeight = 2
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    point(x, y) {
        this.ctx.rect(x, y, this.strokeWeight, this.strokeWeight);
    }
    
    /**
     * @param {{ x: number; y: number; }} start
     * @param {{x: number;y: number}[]} points
     */
    filledPolygon(start, points) {
        this.ctx.moveTo(start.x, start.y)
        for (let point of points) {
            this.ctx.lineTo(point.x, point.y)
        }
        this.ctx.fill()
    }
    /**
     * 
     * @param {string} clr 
     */
    fill(clr) {
        this.ctx.fillStyle = clr;
    }
}
class Vector {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x =0, y=0) {
        this.x = x
        this.y = y
        this.magn = Math.sqrt(x**2 + y**2)
    }
    mag() {
        return this.magn
    }
    /**
     * @param {number} mg
     */
    setMag(mg) {
        let ratio = this.y / this.x
        let x = mg * Math.sqrt(1/(1+ratio**2))
        let y = mg * Math.sqrt((1 - (1/(1+ratio**2))))
        this.x = x
        this.y = y
    }
    /**
     * @param {Vector} vec
     */
    add(vec) {
        this.x += vec.x
        this.y += vec.y
    }
    /**
     * @param {number} val
     */
    mult(val) {
        this.x *= val
        this.y *= val
    }
    /**
     * @param {Vector} v1
     * @param {Vector} v2
     */
    static sub(v1, v2) {
        return new Vector(v2.x - v1.x, v2.y - v1.y)
    }
}


/**
 * @param {number} x
 * @param {number} y
 */
function createVector(x, y) {
    return new Vector(x, y)
}
function dist() {

}

class Boids {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.targetPos = createVector(x, y)
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        // @ts-ignore
        this.acc = createVector()
    }
    update() {
        if (this.vel.mag() >= 2) {
            this.vel.setMag(1.88)
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)

        this.acc.mult(0)

        this.behaviours()
    }
    /**
     * @param {(arg0: number, arg1: number) => void} drawingFunction
     */
    show(drawingFunction) {
        drawingFunction(this.pos.x, this.pos.y)
    }
    /**
     * @param {Vector} f
     */
    applyForce(f) {
        this.acc.add(f)
    }
    behaviours() {
        let mouseX = 2
        let mouseY = 3
        let v = Vector.sub(createVector(mouseX, mouseY), this.pos)
        if (v.mag() < 50) {
          v.mult(-0.01)
          this.applyForce(v)
        }
      let p = Vector.sub(this.pos, this.targetPos)
      p.mult(-0.1)
      this.applyForce(p)
      this.vel.setMag(p.mag())
    }
}