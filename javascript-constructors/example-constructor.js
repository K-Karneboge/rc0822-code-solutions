function ExampleConstructor() {
}

console.log(ExampleConstructor.prototype);

console.log(typeof ExampleConstructor);
var papaya = new ExampleConstructor();
console.log(papaya);

var mango = papaya instanceof ExampleConstructor;
console.log(mango);
