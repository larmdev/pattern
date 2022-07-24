"use strict";
exports.__esModule = true;
exports.HelyBasil = exports.HelyBasilBuilder = void 0;
var HelyBasilBuilder = /** @class */ (function () {
    function HelyBasilBuilder(meat) {
        this.meat = meat;
        return this;
    }
    HelyBasilBuilder.prototype.FishSauce = function (fishSauce) {
        this.fishSauce = fishSauce;
        return this;
    };
    HelyBasilBuilder.prototype.Garlic = function (garlic) {
        this.garlic = garlic;
        return this;
    };
    HelyBasilBuilder.prototype.Chili = function (chili) {
        this.chili = chili;
        return this;
    };
    HelyBasilBuilder.prototype.build = function () {
        var helyBasil = new HelyBasil(this);
        return helyBasil;
    };
    return HelyBasilBuilder;
}());
exports.HelyBasilBuilder = HelyBasilBuilder;
var HelyBasil = /** @class */ (function () {
    function HelyBasil(builder) {
        this.meat = builder.meat;
        this.fishSauce = builder.fishSauce;
        this.garlic = builder.garlic;
        this.chili = builder.chili;
    }
    //ต้องมี getter แต่ไม่ต้องมี setter
    HelyBasil.prototype.getMeat = function () {
        return this.meat;
    };
    HelyBasil.prototype.getfishSauce = function () {
        return this.fishSauce;
    };
    HelyBasil.prototype.getgarlic = function () {
        return this.garlic;
    };
    HelyBasil.prototype.getchili = function () {
        return this.chili;
    };
    HelyBasil.prototype.toString = function () {
        var order = "HolyBasil " + this.meat + ", fishSauce:" + this.fishSauce + ", garlic:" + this.garlic + ", chili:" + this.chili;
        return order;
    };
    return HelyBasil;
}());
exports.HelyBasil = HelyBasil;
var dish1 = new HelyBasilBuilder("Pork")
    .FishSauce("นิดเดียว")
    .Garlic("เยอะๆ")
    .Chili("ไม่พริก")
    .build();
console.log(dish1);
var dish2 = new HelyBasilBuilder("cheken")
    .Chili("ไม่พริก")
    .build();
console.log(dish2);
