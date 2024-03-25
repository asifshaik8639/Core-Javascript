window.addEventListener('load' , function(e) {

    let rowsList = document.querySelectorAll('div.row');
    let table = document.querySelectorA('.board');
    
    for (let i = 0; i < 8 ; i++) {
        let currentRow = rowsList[i];
        for(let j = 0; j < 8 ; j++) {
            currentRow[j].setAttribute('data-id', `${i}-${j}`);
        }
    }
});