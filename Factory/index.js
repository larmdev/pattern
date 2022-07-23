"use strict";
exports.__esModule = true;
exports.Barista = exports.Coffee = exports.Cola = void 0;
var Cola = /** @class */ (function () {
    function Cola() {
    }
    Cola.prototype.brew = function () {
        console.log('brew cola');
    };
    return Cola;
}());
exports.Cola = Cola;
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.brew = function () {
        console.log('brew coffee');
    };
    return Coffee;
}());
exports.Coffee = Coffee;
var Barista = /** @class */ (function () {
    function Barista() {
    }
    Barista.prototype.order = function (name) {
        if (name === 'cola')
            return new Cola();
        else if (name === 'coffee')
            return new Coffee();
        return null;
    };
    return Barista;
}());
exports.Barista = Barista;
var barista = new Barista();
var order1 = barista.order('coffee');
order1 === null || order1 === void 0 ? void 0 : order1.brew();
var order2 = barista.order('cola');
order2 === null || order2 === void 0 ? void 0 : order2.brew();
var cache = {};
cache.username = 'username';
cache.age = 20;
cache.rows = { user: 111 };
var cache2 = [];
cache2.username = 'username2';
cache2.age = 22;
cache2.rows = { user: 111 };
console.log('cache', cache, cache2);
