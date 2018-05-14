class Particle {
    float x, y, r, maxR;
    color c;
    boolean sw;
    PVector pos, vel, acc;



    Particle(float _x, float _y) {
        x = _x;
        y = _y;
        r = 3;
        maxR = random(5, 12);
        c = color(255, 0, random(255));
        sw = false;

        pos = new PVector(x, y);
        vel = new PVector(pmouseX + random(-5, 5), pmouseY + random(-5, 5)).sub(new PVector(mouseX, mouseY));
        acc = new PVector();
    }


    void show() {
        noStroke();
        fill(c);
        ellipse(pos.x, pos.y, r * 2, r * 2);
    }


    void update() {
        vel.add(acc);
        vel.limit(3);
        pos.add(vel);
        acc.mult(0);
        if (!sw) {
            if (r < maxR) {
                r += 1;
            } else {
                sw = true;
            }
        } else {
            if (r > 0) {
                r -= .1;
            } else {
                r = 0;
            }
        }
    }


    void applyForce(PVector f) {
        acc.add(f);
    }
}
