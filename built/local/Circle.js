"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(id) {
        this.item = document.getElementById(id);
    }
    return Circle;
}());
var circle = {
    item: document.getElementById('circle55'),
    show: function () {
        this.item.setAttribute('data-state', 'shown');
    }
};
exports["default"] = circle;
