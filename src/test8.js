

const filterFn = (arr, condition) => arr.map((num) => {
    if(condition === 'multiply') {
       return num = num * 2;
    } else if(condition === 'division'){
       return num = num / 2;
    }
});

const arr = [10, 8, 2];

console.log('filterValue with ==> multiply --> ', filterFn(arr, 'multiply'));