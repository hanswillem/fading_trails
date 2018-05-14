var p, started;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    p = [];
    sarted = false;
}


function draw() {
    background(0, 25);
    if (!started) {
        drawText();
    } else {
        recordParticles();
        drawParticles();
        killParticles();
    }
}


function recordParticles() {
    if (mouseIsPressed) {
        noCursor();
        for (var i = 0; i < 5; i++) {
            p.push(new Particle(mouseX, mouseY));
        }
    }
}


function mousePressed() {
    started = true;
}


function mouseReleased() {
    cursor(ARROW);
}


function drawParticles() {
    p.forEach(function(i) {
        var noise = createVector(random(-.5, .5), random(-.5, .5));
        i.applyForce(noise);
        var friction = i.vel.copy();
        friction.mult(-.015);
        i.applyForce(friction);
        i.update();
        i.show();
    });

}


function killParticles() {
    for (var i = p.length - 1; i >= 0; i--) {
        if (p[i].r === 0) {
            p.splice(i, 1);
        }
    }
}

function drawText() {
    noStroke();
    fill(255, 0, 115);
    textSize(36);
    var t = 'S T A R T  D R A W I N G   T O   B E G I N';
    text(t, (width / 2) - (textWidth(t) / 2), height / 2);
}
