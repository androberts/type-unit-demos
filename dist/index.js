"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var type_unit_1 = require("type-unit");
var assert = require("assert");
var MathTests = (function () {
    function MathTests() {
    }
    MathTests.prototype.addition = function () {
        assert.equal(1 + 1, 2);
    };
    MathTests.prototype.exponentiation = function (base, exponent, expectedValue) {
        assert.equal(Math.pow(base, exponent), expectedValue);
    };
    __decorate([
        type_unit_1.fact("Should be able to add"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MathTests.prototype, "addition", null);
    __decorate([
        type_unit_1.theory([
            [2, 1, 2],
            [2, 2, 4],
            [2, 3, 8]
        ], "Should be able to exponentiate"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, Number, Number]), 
        __metadata('design:returntype', void 0)
    ], MathTests.prototype, "exponentiation", null);
    MathTests = __decorate([
        type_unit_1.suite("Arithmetic"), 
        __metadata('design:paramtypes', [])
    ], MathTests);
    return MathTests;
}());
//# sourceMappingURL=index.js.map