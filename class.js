// 與 Java OOP 概念有關：封裝、繼承、多形
// 先做出一個動物的類(class)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('Amy');
console.log(snake.run);
