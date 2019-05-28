import { DrawableShape as Shape } from './shapes';
import { Observer } from './observer';

export interface Subject {
  notifyAll(): void;
  registerObserver(obs: Observer): void;
  unRegisterObserver(obs: Observer): void;
}

/**
 * The CAD drawing model currently being created
 */
export class Model implements Subject {
  private shapes: Shape[] = [];
  private observers: Observer[] = [];

  getShapes(): Shape[] {
    return this.shapes;
  }

  getShapeAt(x: number, y: number): Shape | null {
    for (let shape of this.shapes) {
      if (shape.contains(x, y)) {
        return shape;
      }
    }
    return null; //return last shape
  }

  addShape(newShape: Shape) {
    this.shapes.push(newShape); //add to front so act first when arriving
    this.notifyAll();
  }

  deleteShape(shape: Shape | null) {
    if (shape) {
      this.shapes.splice(this.shapes.indexOf(shape), 1);
      this.notifyAll();
    }
  }

  updateShapeLocation(shape: Shape, x: number, y: number) {
    shape.setPosition(x, y);
    this.notifyAll();
  }

  updateShapes(updatedShapes: Shape[]): void {
    this.shapes = updatedShapes;
    this.notifyAll();
  }

  //Subject
  registerObserver(newObserver: Observer) {
    this.observers.push(newObserver);
  }

  notifyAll(): void {
    this.observers.forEach((observer) => observer.notify());
  }
  unRegisterObserver(deleteObserver: Observer): void {
    let index = this.observers.indexOf(deleteObserver);
    this.observers.splice(index, 1);
  }
}
