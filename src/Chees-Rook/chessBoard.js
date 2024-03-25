
window.addEventListener('load', function(event){

    let table = document.querySelector('#table');

    (function createChessBoard() {
        let rows = 8;
        let columns = 8;
    
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.setAttribute('data-id', `${i}-${j}`);
                td.setAttribute('class', `box ${ (i + j) % 2 === 0 ? 'white' : 'black'}`);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    })();


    let ChessBoxList = document.querySelectorAll('.box');
    let checkBoxSize = 64;
     

    table.addEventListener('mouseover', function(event){
        
        for(let index = 0; index < checkBoxSize; index++) {
            ChessBoxList[index].classList.remove('yellow');
        }
        
        event.target.classList.add('yellow');

        let selectedCell = event.target.getAttribute('data-id')

        let chessGridObj = {};
        // chessGridObj[selectedCell] = true;

        let currentRow = selectedCell?.split('-')[0];
        let currentColumn = selectedCell?.split('-')[1];

        top(currentRow, currentColumn, chessGridObj);
        bottom(currentRow, currentColumn, chessGridObj);
        left(currentRow, currentColumn, chessGridObj);
        right(currentRow, currentColumn, chessGridObj);

        repaint(chessGridObj);
    });

    function repaint(chessGridObj) {
        
        for(let i = 0; i < checkBoxSize; i++)
        {
            const dataId = ChessBoxList[i].getAttribute('data-id')
            if(chessGridObj[dataId] === true)
            {
                ChessBoxList[i].classList.add('yellow');
            }
        }
        
    }

    function top(currentRow, currentColumn, chessGridObj) {

        currentRow--;

        while(currentRow >= 0  && currentColumn < 8 ) {
            let cell = `${currentRow}-${currentColumn}`;
            chessGridObj[cell] = true;
            currentRow--;
            
        }
        
    }

    function bottom(currentRow, currentColumn, chessGridObj) {

        currentRow++;
         while(currentRow < 8  && currentColumn >= 0) {
            let cell = `${currentRow}-${currentColumn}`;
            chessGridObj[cell] = true;
            currentRow++;
        }
        
    }
    
    function left(currentRow, currentColumn, chessGridObj) {

        currentColumn--;
         while(currentRow < 8  && currentColumn >= 0) {
            let cell = `${currentRow}-${currentColumn}`;
            chessGridObj[cell] = true;
            currentColumn--;
            
        }
        
    }
    
    function right(currentRow, currentColumn, chessGridObj) {

        currentColumn++;
         while(currentRow >= 0  && currentColumn < 8) {
            let cell = `${currentRow}-${currentColumn}`;
            chessGridObj[cell] = true;
            currentColumn++;
            
        }
    }

});