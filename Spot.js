class Spot {

    constructor(x, y, wall) {
        this.x = x;
        this.y = y;

        this.wall = wall;
        this.isSpot = true;
    }


    draw() {
        if (this.wall) {
            stroke(0,0,0,255);
        } else {
            stroke(255, 0, 0, 10);
        }
        point(this.x, this.y);
    }

}