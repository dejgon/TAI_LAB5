"use strict";
class Complex {
    constructor(real, imagine) {
        this.real = real;
        this.imagine = imagine;
    }
    add(comp) {
        return new Complex((this.real + comp.real), (this.imagine + comp.imagine));
    }
    subtract(comp) {
        return new Complex((this.real - comp.real), (this.imagine - comp.imagine));
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imagine, 2));
    }
    toString() {
        return "Real: " + this.real + "\n Imagine: " + this.imagine;
    }
}
let comp1 = new Complex(2, 3);
let comp2 = new Complex(5, -2);
console.log("Add: " + comp1.add(comp2));
console.log("Subtract: " + comp1.subtract(comp2));
console.log("Module: " + comp1.module());
console.log("toString: " + comp1.toString());
