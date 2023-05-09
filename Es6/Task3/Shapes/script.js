class Polygon {
    constructor(height, width) {
        if(this.constructor== Polygon){
            throw 'Abstract Class';
        }
        this.height = height;
        this.width = width;
    }
    calcPerimeter() {
        return 2*(this.height + this.width);
    }
    calcArea() {
        return this.height * this.width;
    }
    toString() {
        return `Area is ${this.calcArea()} and Perimeter is ${this.calcPerimeter()}`;
    }
}

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.length = length;
    }
}

class Triangle extends Polygon {
    constructor(s1, s2, s3) {
        let width = s1;
        let height = undefined;
        super(height, width);
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    calcPerimeter() {
        return this.s1 + this.s2 + this.s3
    }
    calcArea() {
        let s = this.calcPerimeter()/2;
        return Math.sqrt((s*(s - this.s1)*(s - this.s2)*(s - this.s3)));
    }
}

class Circle extends Polygon {
    constructor(r) {
        super(2*r, 2*r);
        this.r = r;
    }
    calcPerimeter() {
        return 2 * Math.PI * this.r;
    }
    calcArea() {
        return Math.PI * this.r * this.r;
    }
}
let sqr = new Square(4);
let rec = new Rectangle(10, 8);
let tri = new Triangle(5, 4, 3);
let cir = new Circle(10);

console.log(sqr.toString());
console.log(rec.toString());
console.log(tri.toString());
console.log(cir.toString());