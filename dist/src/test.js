"use strict";
function greeter(person) {
    return "hello, " + person;
}
var user = 'yushare';
var v1;
v1 = 12;
v1 = 'ysy';
v1[0].name = 12;
var v2;
v2 = 22;
v2 = [1, 2, 3];
// v2[0] = 'name' // error: 对象的类型为 "unknown"。
var empty_arr = [];
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
var ss = Animal['Dog'];
var r = "red" /* Red */;
var g = "green" /* 'Green' */;
c = "blue" /* Blue */;
var getUserName = function (user) { return user.name; };
