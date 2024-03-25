
if(!(Array.prototype.itemIncludes)) {
    Array.prototype.itemIncludes = function(item) {
        let inputArray = this;
        let itemToCheck = item;
        let inputArrayLength = inputArray.length || 0;

        if (inputArrayLength === 0) {
            throw new Error('Invalid Input.Array is empty!');
        } else if(itemToCheck === undefined) {
            throw new Error('Please provide the item to proceed');
        } else {
            if(!isNaN(item)) {
                return inputArray.indexOf(itemToCheck) !== -1;
            } else {
                throw new Error('Not a number.. Please enter proper Integer or BigInt');
            }
        }
    }
}

const myArray = [1, 2, 3, 4, 5, 6];
const emptyArray = [];

console.log(myArray.itemIncludes()); // Output: 5
console.log(emptyArray.itemIncludes(3)); // Output: -1
