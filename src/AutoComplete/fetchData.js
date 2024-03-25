let controller = new AbortController();
let signal = controller.signal;
// Using Promises
export default async function fetchData(name) {
    try {
        console.log('In fetchData', name);
        controller.abort(); // Abort the previous request if still in progress
        controller = new AbortController(); // Create a new controller for the new request
        signal = controller.signal;
        let rawResponse = await fetch(`https://restcountries.com/v3.1/name/${name}`, { signal });
    
        if (signal.aborted) {
            console.log('Request was aborted');
        } else if (!rawResponse.ok) {
            throw new Error(`HTTP error! Status: ${rawResponse.status}`);
        } else if(rawResponse?.status > 299 || rawResponse?.status < 200) {
            throw new Error('Something went wrong')
        }
        
        let finalResult = await rawResponse.json()
        console.log('final result ==> ', finalResult);
        return finalResult;
        
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Search aborted:', error.message);
        } else {
            console.error('Error:', error);
        }
    }
 }