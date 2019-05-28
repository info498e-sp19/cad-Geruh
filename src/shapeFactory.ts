import { DrawableShape as Shape, Circle, Rectangle, Triangle } from "./shapes";

const shapeSize: number = 60;
const yOffsetTriangle = Math.round(
  Math.sqrt(Math.pow(shapeSize, 2) - Math.pow(shapeSize / 2, 2)) / 2
);

export class ShapeFactory {
  createCircle(
    cx: number,
    cy: number,
    radius: number = shapeSize,
    color: string = "blue"
  ): Shape {
    return new Circle(cx, cy, radius, color);
  }
  createRectangle(
    x: number,
    y: number,
    width: number = shapeSize * 2,
    height: number = shapeSize,
    color: string = "red"
  ): Shape {
    return new Rectangle(x, y, width, height, color);
  }
  createTriangle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    color: string = "green"
  ): Shape {
    return new Triangle(x1, y1, x2, y2, x3, y3, color);
  }

  createShapeFromClick(shape: String, x: number, y: number): Shape {
    if (shape === "rectangle") {
      return this.createRectangle(x, y);
    } else if (shape === "circle") {
      return this.createCircle(x, y);
    } else {
      //implements pythagorean theorem inorder to create triangle
      return this.createTriangle(
        x,
        y - yOffsetTriangle,
        x + shapeSize / 2,
        y + yOffsetTriangle,
        x - shapeSize / 2,
        y + yOffsetTriangle
      );
    }
  }

  createShapeFromJSON(shape: any): Shape {
    if (shape.radius) {
      return this.createCircle(shape.cx, shape.cy, shape.radius, shape.color);
    } else if (shape.width) {
      return this.createRectangle(
        shape.x + shape.width / 2,
        shape.y + shape.height / 2,
        shape.width,
        shape.height,
        shape.color
      );
    } else {
      return this.createTriangle(
        shape.x1,
        shape.y1,
        shape.x2,
        shape.y2,
        shape.x3,
        shape.y3,
        shape.color
      );
    }
  }
}
