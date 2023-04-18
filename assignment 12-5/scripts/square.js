class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;class Square {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setColor(color) {
        this.color = color;
    }
    get theX() {
        return this.x;
    }
    get theY() {
        return this.y;
    }
    get theHeight() {
        return this.height;
    }
    get theWidth() {
        return this.width;
    }
    get theColor() {
        return this.color;
    }
}
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}