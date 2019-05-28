import { ShapeFactory } from "./shapeFactory";
import { Model } from "./model";
import { DrawableShape as Shape } from "./shapes";
import { TextView } from "./text-view";

export class TextController {
  private shapeFactory = new ShapeFactory();
  private view: TextView;

  constructor(private model: Model) {
    this.view = new TextView(model, this);
    this.model.registerObserver(this.view);
  }

  updateCanvasShapes(shapes: string) {
    let updatedShapes: Shape[] = [];
    // Handle empty text by clearing the canvas
    if (
      !shapes ||
      shapes === "[" ||
      (!shapes.endsWith("]") && !shapes.startsWith("["))
    ) {
      this.model.updateShapes(updatedShapes);
      return;
    }
    try {
      let shapeJSON = JSON.parse(shapes);
      updatedShapes = shapeJSON.map((shape: Object) => {
        return this.shapeFactory.createShapeFromJSON(shape);
      });
      this.model.updateShapes(updatedShapes);
    } catch {
      console.log("ERROR: can't parse the json string!");
    }
  }
}
