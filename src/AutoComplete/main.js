import fetchData from "./fetchData.js";
import { memoize, debounce } from "./utils.js";

let inputElement = document.querySelector('#search_input');
let suggestionList = document.querySelector('#suggestion_box');
const NO_DATA_AVAILABLE = 'No data available for this search';

function createdataRow(fragement, name) {
    let li = document.createElement('li');
    li.textContent = name;
    fragement.appendChild(li);
 }

 function processData(response) {
   
    try {
    let fragement = document.createDocumentFragment();
    let previousSuggestionList = suggestionList?.children?.length || 0;

    // Clear previous suggestion list
    for (let index = previousSuggestionList - 1; index >= 0; --index) { 
         suggestionList?.children?.item(index)?.remove();
    }

    if(!!response && Array.isArray(response)) {
        let responseSize = response.length;
        if(responseSize === 0) {
            suggestionList.classList.remove('visible');
            // createdataRow(fragement, NO_DATA_AVAILABLE);
        } else {
            suggestionList.classList.add('visible');
        }
        
        for(let index = 0; index < responseSize; index++) {
            if(responseSize <= 10) {
                let name = response[index]?.name?.common;
                createdataRow(fragement, name);
            }
        }
        suggestionList.appendChild(fragement);
    } else {
        suggestionList.classList.remove('visible');
        // createdataRow(fragement, NO_DATA_AVAILABLE);
    }

    } catch (error) {
        console.log('In error from processData', error);
    }
 }

 let memoizeResponse = memoize(fetchData);
 const handleSuggestions = async (e) => {

    console.log(e.target.value);
    const keyword = e.target.value;
    const response = null;
   
    if(keyword !== '') {
        response = await memoizeResponse(keyword);
    }

    // const response = await fetchData(keyword);
    console.log('In result from handleSuggestions', response);
    processData(response);
}

inputElement.addEventListener('input', debounce(handleSuggestions, 1000));