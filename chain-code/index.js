"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sample = exports.Creator = void 0;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.sayHello = function () {
        console.log('say hello');
    };
    return Creator;
}());
exports.Creator = Creator;
var Sample = /** @class */ (function (_super) {
    __extends(Sample, _super);
    function Sample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sample.prototype.sayWebsite = function () {
        console.log('say website');
    };
    return Sample;
}(Creator));
exports.Sample = Sample;
var sample = new Sample();
sample.sayHello();
sample.sayWebsite();
