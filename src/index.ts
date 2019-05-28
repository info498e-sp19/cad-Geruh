import "bootstrap"; //bootstrap.js for button toggling
import { Model } from "./model";
import { CanvasController } from "./canvas-controller";
import { TextController } from "./text-controller";

let model = new Model();
let canvasController = new CanvasController(model);
let textController = new TextController(model);
