// Getter -- special method that makes a property readable
//Setter -- special method that makes a property writable
// validate and modify a value when reading/writing a property

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area(){
        return (rectangle.width) * (rectangle.height);
    }

}

const rectangle = new Rectangle(10,80);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(`Area of Rectangle: ${rectangle.area}`);
