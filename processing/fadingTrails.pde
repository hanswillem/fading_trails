// draw with the mouse


ArrayList<Particle> p;


void setup() {
    size(1280, 720);
    background(0, 25);
    p = new ArrayList<Particle>();
}


void draw() {
    t_background(0, 25);
    recordParticles();
    drawParticles();
    killParticles();
}


void recordParticles() {
    if (mousePressed) {
      noCursor();
        for (int i = 0; i < 3; i++) {
            p.add(new Particle(mouseX, mouseY));
        }
    } else {
      cursor(ARROW);
    }
}


void drawParticles() {
    for (Particle i : p) {
        PVector noise = new PVector(random(-1, 1), random(-1, 1));
        i.applyForce(noise);
        PVector friction = i.vel.copy();
        i.applyForce(friction);
        i.update();
        i.show();
    }
}


void killParticles() {
    for (int i = p.size() - 1; i >= 0; i--) {
        if (p.get(i).r == 0) {
            p.remove(i);
        }
    }
}

void t_background(int c, int a) {
  noStroke();
  fill(c, a);
  rect(0, 0, width, height);
}
