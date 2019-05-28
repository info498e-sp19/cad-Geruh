"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A class to represent the View. Contains control buttons and an HTML5 canvas.
 */
var View = /** @class */ (function () {
    function View(model) {
        var _this = this;
        this.model = model;
        //constants for easy access
        this.canvas = document.querySelector('#graphics-view canvas');
        this.brush = this.canvas.getContext('2d');
        this.selected = null; //selected state is handled by View
        //event listeners (DOM for readability/speed)
        this.canvas.addEventListener('mousedown', function (e) { _this.handleMouseDown(e); });
        this.canvas.addEventListener('mouseup', function (e) { _this.handleMouseUp(e); });
        this.canvas.addEventListener('mousemove', function (e) { _this.handleMove(e); });
        var optionButtons = $("#graphics-view input:radio");
        this.action = optionButtons.val(); //current (initial) selection
        optionButtons.change(function (e) { _this.action = $(e.target).val(); }); //update action
        //responsive canvas
        $(window).resize(function () { _this.resizeCanvas(); }); //call function on window resize
        this.resizeCanvas(); //initial sizing
    }
    View.prototype.display = function () {
        //erase canvas
        this.brush.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var shapes = this.model.getShapes();
        //draw all the shapes!
        for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
            var shape = shapes_1[_i];
            shape.draw(this.brush);
        }
    };
    View.prototype.handleMouseDown = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        if (this.action === 'move') {
            this.selected = this.model.getShapeAt(x, y);
        }
        else if (this.action === 'delete') {
            //TODO: delete shape at x,y coordinates
        }
        else { //a creation method
            //TODO: create shape (based on action) at x,y coordinates
        }
    };
    View.prototype.handleMouseUp = function (event) {
        this.selected = null;
    };
    View.prototype.handleMove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        if (this.selected) {
            //TODO: move the selected shape to x,y
        }
    };
    //make Canvas responsive (adapted from http://ameijer.nl/2011/08/resizable-html5-canvas/)
    View.prototype.resizeCanvas = function () {
        var ratio = 1; //4/3;
        var canvasElem = $(this.canvas);
        canvasElem.attr('width', canvasElem.parent().width());
        canvasElem.attr('height', ratio * canvasElem.width());
        this.display();
    };
    return View;
}());
exports.View = View;
//# sourceMappingURL=view-canvas.js.map