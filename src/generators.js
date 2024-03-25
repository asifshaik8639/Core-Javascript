const fetch = require('node-fetch'); // Import the node-fetch module


function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Simulate an API call
  function fetchData(apiEndpoint) {
    return fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        return response.json();
      });
  }
  
  // Generator function with 5 asynchronous operations
  function* asyncOperations() {
    try {
      // Use case 1: Asynchronous API call
      const data1 = yield fetchData('https://jsonplaceholder.typicode.com/posts/1');
      console.log('Use Case 1:', data1['title']);
  
      // Use case 2: Asynchronous API call with error handling
      const data2 = yield fetchData('https://jsonplaceholder.typicode.com/posts/1');
      console.log('Use Case 2:', data2['title']);
  
      // Use case 3: Asynchronous Promise
      const data3 = yield new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise Resolved'), 1000);
      });
      console.log('Use Case 3:', data3);
  
      // Use case 4: Asynchronous operation using async/await
      const data4 = yield (async () => {
        await delay(1000);
        return 'Async/Await Result';
      })();
      console.log('Use Case 4:', data4);
  
      // Use case 5: Synchronous operation
      const data5 = 'Synchronous Data';
      console.log('Use Case 5:', data5);
    } catch (error) {
      console.error('In catch with Error:', error);
    }
  }
  
  // Execute the generator function
  const gen = asyncOperations();
  
  function handleNext(result) {
    const { value, done } = gen.next(result);
    if (!done) {
      if (value instanceof Promise) {
        console.log('This is a promise call with value ==> ', value);
        value
          .then((result) => handleNext(result))
          .catch((error) => gen.throw(error));
      } else {
        handleNext(value);
      }
    }
  }
  
  // Start the generator
  handleNext();
  