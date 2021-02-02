class Circle {
    constructor(shape, diameter) {
        this.shape = shape;
        this.diameter = diameter;
    }

    get area() {
        return ((Math.PI * (Math.pow(this.radius, 2))));
    }

    get radius() {
        return (this.diameter / 2);
    }

    toString() {
        return ("Circle: Radius = " + this.radius + ", Area = " + this.area);
    }
}


class Square {
    constructor(shape, width) {
        this.shape = shape;
        this.width = width;
    }

    get area() {
        return (this.width * this.width);
    }

    toString() {
        return ("Square: Size = " + this.width + ", Area = " + this.area);
    }
}

//module.exports = new Circle("Circle", Math.floor(Math.random() * 100) + 1)