function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 3;
    this.maxR = random(5, 12);
    this.bl = random(255);
    this.rd = 255;
    this.switch = false;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(pmouseX + random(-5, 5), pmouseY + random(-5, 5)).sub(createVector(mouseX, mouseY));
    this.acc = createVector();


    this.show = function() {
        noStroke();
        fill(this.rd, 0, this.bl);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }


    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);
        this.acc.mult(0);
        if (!this.switch) {
            if (this.r < this.maxR) {
                this.r += 1;
            } else {
                this.switch = true;
            }
        } else {
            if (this.r > 0) {
                this.r -= .2;
                this.rd -= 5;
            } else {
                this.r = 0;
            }
        }
    }


    this.applyForce = function(f) {
        this.acc.add(f);
    }
}
