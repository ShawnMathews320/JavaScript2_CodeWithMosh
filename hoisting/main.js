// hoisting means the function is read at the top of the code regardless of its position
// so it can be called before it is even declared
// functions are hoisted, but function expressions are not
// class declarations and expressions are not hoisted
sayHello();

function sayHello() {}

const sayGoodbye = function () {};

// class declaration
class Circle {}

// class expression
const Square = class {};
