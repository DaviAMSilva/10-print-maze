class Spot {

    constructor(x, y, wall) {
        this.x = x;
        this.y = y;

        this.wall = wall;
        this.neighbors = [];
    }


    draw(col) {
        col ? stroke(col) : stroke(255, 50);
        if (!this.wall) {
            stroke(255, 0, 0, 50);
        }
        point(this.x, this.y);
    }

}