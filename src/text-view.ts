import { Model } from "./model";
import { TextController } from "./text-controller";
import { Observer } from "./observer";

export class TextView implements Observer {
    readonly textView = $('#text-view .form-control');

    constructor(private model: Model, private controller: TextController) {
        let button = $('#text-view button');
        button.on('click', event => this.updateCanvasView());
        this.textView.on('input', event => this.updateCanvasView());
    }

    notify(): void {
        this.display();
        this.resizeTextView();
    }

    display(): void {
        // turns the shapes into a JSON object for display
        let shapes = JSON.stringify(this.model.getShapes());
        this.textView.val(shapes);
    }

    updateCanvasView(): void {
        let shapesAsString = this.textView.val() as string
        this.controller.updateCanvasShapes(shapesAsString);
    }

    resizeTextView(): void {
        let countOfShapes = this.model.getShapes().length;
        this.textView.attr('rows', countOfShapes * 2);
    }
}