if (!Array.prototype.last) {
    Array.prototype.last = function() {
        let inputArray = this;
        let inputArrayLength = inputArray.length || 0;
        if (inputArrayLength === 0) {
          return -1;
        } else {
          return inputArray[inputArrayLength - 1];
        }
    };
}

const myArray = [1, 2, 3, 4, 5, 6];
const emptyArray = [];

console.log(myArray.last()); // Output: 5
console.log(emptyArray.last()); // Output: -1

  