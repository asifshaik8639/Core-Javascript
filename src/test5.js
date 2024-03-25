const { addPath } = require("graphql/jsutils/Path");

function foo() {
    let a = b = 0;
    a++;
    return a;
}

foo();

console.log('type of a', typeof a);
console.log('type of b', typeof b);

const t = 10;
function test1() {
    const t = 11;
    console.log('value of t in test1', t);
}
test1();

console.log('value of t out side of test1', t);

