class Spot {

    constructor(x, y, wall) {
        this.x = x;
        this.y = y;

        this.f = 0;
        this.g = 0;
        this.h = 0;

        this.wall = wall || false;
        this.neighbors = [];
    }


    draw(col) {
        col ? stroke(col) : stroke(255, 50);
        if (!this.wall) {
            stroke(255, 0, 0, 50);
        }
        if (this === start || this === end) {
            stroke(0, 0, 255);
        }
        point(this.x, this.y);
    }

}