class Spot {

    constructor(x, y, wall, atBorder) {
        this.x = x;
        this.y = y;

        this.f = 0;
        this.g = 0;
        this.h = 0;

        this.wall = wall || false;
        this.neighbors = [];

        this.atBorder = atBorder;
    }


    draw() {
        if (!this.wall) point(this.x, this.y);
    }

}