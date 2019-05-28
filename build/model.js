"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The CAD drawing model currently being created
 */
var Model = /** @class */ (function () {
    function Model() {
        this.shapes = [];
    }
    Model.prototype.getShapes = function () {
        return this.shapes;
    };
    Model.prototype.getShapeAt = function (x, y) {
        for (var _i = 0, _a = this.shapes; _i < _a.length; _i++) {
            var shape = _a[_i];
            if (shape.contains(x, y)) {
                return shape;
            }
        }
        return null; //return last shape
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map