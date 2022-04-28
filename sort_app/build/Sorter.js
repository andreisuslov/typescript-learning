"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/*
Abstract class ->
- Sets up a contract between different classes
- Can't be used to create an object directly
- Only used as a parent class when we are trying to build up a definition of an object
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet
(we we still have to provide names and types for the un-implementer methods)
- Can make child classes promise to implement some other method
- Strongly couples classes together

Interface class ->
- Sets up a contract between different classes
- Used when we have very different objects that we want to work together
- Promotes loose coupling
*/
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
