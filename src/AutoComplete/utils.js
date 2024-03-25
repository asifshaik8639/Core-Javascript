export function debounce(fn, delay = 1000) {
    let timerId;
    return function() {
        let args = arguments;

        if(timerId) {
            clearTimeout(timerId);
            console.count('In clearTimeout of debounce after ', delay);
        }
        timerId = setTimeout(() => {
           console.count('In debounce after ', delay);
            fn(...args);
        }, delay);
    }
}

function basicMemoize(fn) {
    let cache = {};
    return async function(key) {
         if(!!cache[key]) {
            console.log('available in Memory ', cache[key]);
            return cache[key];
         } else {
            let result = await fn(key);
            console.log('not available in Memory ', result);
            cache[key] = result;
            return result;         
         }
    }
}

export function memoize(fn, cacheLimit = 30) {
    let cache = {};
    let order = []; // To keep track of the order in which items were accessed

    return async function (key) {
        if (!!cache[key]) {
            // If the key is already in the cache, move it to the front of the order
            const index = order.indexOf(key);
            order.splice(index, 1);
            order.unshift(key);

            console.log('Available in Memory ', cache[key]);
            return cache[key];
        } else {
            let result = await fn(key);
            console.log('Not available in Memory ', result);

            // Add the new key to the cache and order
            cache[key] = result;
            order.unshift(key);

            // Check if the cache exceeds the limit and remove the LRU item
            if (order.length > cacheLimit) {
                const lruKey = order.pop();
                delete cache[lruKey];
            }

            return result;
        }
    };
}
