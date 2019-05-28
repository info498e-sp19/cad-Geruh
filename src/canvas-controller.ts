import { ShapeFactory } from "./shapeFactory";
import { Model } from "./model";
import { DrawableShape as Shape } from "./shapes";
import { CanvasView } from "./view-canvas";

export class CanvasController {
  private shapeFactory: ShapeFactory = new ShapeFactory();
  private view: CanvasView;

  constructor(private model: Model) {
    this.view = new CanvasView(model, this);
    this.model.registerObserver(this.view);
  }

  generateShape(action: String, x: number, y: number): void {
    this.model.addShape(this.shapeFactory.createShapeFromClick(action, x, y));
  }

  deleteShape(x: number, y: number): void {
    let shape = this.model.getShapeAt(x, y);
    this.model.deleteShape(shape);
  }

  //gets shape and drags it to new coordinates
  dragShape(shape: Shape, x: number, y: number): void {
    this.model.updateShapeLocation(shape, x, y);
  }
}
