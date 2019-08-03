class Square {

    constructor(x, y, left, right, top, bottom, type) {
        this.x = x;
        this.y = y;

        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;

        if (type) {
            this.type = type;
        } else {
            random() < .5 ? this.type = "/" : this.type = "\\"
        }
    }

    draw() {
        if (this.type==="/") {
            line(this.x, this.y + size, this.x + size, this.y);
        } else if (this.type ==="\\") {
            line(this.x, this.y, this.x + size, this.y + size)
        }
    }

}