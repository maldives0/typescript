"use strict";
exports.__esModule = true;
exports.Sub = exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(mine) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.mine = mine;
        this.field = true;
    }
    return Hero;
}());
exports.Hero = Hero;
var Sub = /** @class */ (function () {
    function Sub(mine) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        this.mine = mine;
        this.field = false;
    }
    return Sub;
}());
exports.Sub = Sub;
