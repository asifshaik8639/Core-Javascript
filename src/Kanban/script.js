// DUMMY DATA FOR THE COLORS
let ticketsArr = [
  {
    ticketTask: "This is task 1 (lightgreen)",
    ticketColor: "lightgreen",
    ticketID: "dGSUFjfiq",
    lock: true
  },
  {
    ticketTask: "This is task 2 (black)",
    ticketColor: "black",
    ticketID: "ay8dQS0o1",
    lock: true
  },
  {
    ticketTask: "This is task 3 (lightblue)",
    ticketColor: "lightblue",
    ticketID: "fOqBFgQtx",
    lock: true
  },
  {
    ticketTask: "This is task 4 (lightpink)",
    ticketColor: "lightpink",
    ticketID: "fOqBFgQtx",
    lock: true
  },
      {
    ticketTask: "This is task 5 (lightgreen)",
    ticketColor: "lightgreen",
    ticketID: "dGSUFjfiq1",
    lock: true
  },
  {
    ticketTask: "This is task 6 (black)",
    ticketColor: "black",
    ticketID: "ay8dQS0o11",
    lock: true
  },
  {
    ticketTask: "This is task 7 (lightblue)",
    ticketColor: "lightblue",
    ticketID: "fOqBFgQtx1",
    lock: true
  },
  {
    ticketTask: "This is task 8 (lightpink)",
    ticketColor: "lightpink",
    ticketID: "fOqBFgQtx1",
    lock: true
  },
];

let toolBoxContainer = document.querySelector('div.toolbox-priority-cont');


// CALLING createTicket() function for each value in ticketsArr
ticketsArr.forEach(function (ticket) {
  createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID, ticket.lock);
});

// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor, ticketID, lock = true) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  let lockClassValue = !!lock ? 'ticket-lock' : 'ticket-unlock';
  let btnText = !!lock ? 'Locked' : 'Unlocked';

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
       <div class="ticket-id">#${id}</div>
       <div class="task-area">${ticketTask}</div>
      <div class="${lockClassValue}">
         <button class='btn-class ${id}'>${btnText}</button>
      </div>`;

  let mainCont = document.querySelector(".main-cont");
  mainCont.append(ticketCont);
  
  ticketCont.addEventListener('click', removeTicketHandler);

  if (!ticketID) {
    ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }

 //  console.log(ticketsArr);
}

let lockBtnContainer = document.querySelector(".ticket-lock"); 

toolBoxContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('color')) {
        
        let selectedToolColor = event.target.classList[0];
        let mainContainer = document.querySelector(".main-cont");
        let currentTicketSize = mainContainer?.children?.length || 0;
        let currentTickets = mainContainer?.children;
        
        for (let index = currentTicketSize - 1; index >= 0; --index) {
          !!currentTickets.item(index) && currentTickets.item(index).remove();
        }

      if(event.detail === 1) {

        let filteredTicketList = ticketsArr.filter((ticket) => {
               return ticket?.ticketColor === selectedToolColor;
        });

        filteredTicketList.forEach(function (ticket) {
            createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID, ticket.lock);
        });
      } else if(event.detail === 2) {
        
          ticketsArr.forEach(function (ticket) {
            createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID, ticket.lock);
          });
      }
    }
});


let textAreaContainer = document.querySelector('textarea');

let modalAreaContainer = document.querySelector('.modal-cont');

let removeBtn = document.querySelector('.remove-btn');

let allticketContainer = document.querySelectorAll("div.ticket-cont");

let isRemoveButtonActive = false;


function updateGlobalSourceData(ticketIdClicked, label) {

  let ticketSize = !!ticketsArr && ticketsArr.length;
  
  for(let index = 0; index < ticketSize; index++) {
      if(ticketsArr[index].ticketID === ticketIdClicked) {
          ticketsArr[index].lock = label === 'Locked' ? true : false;
      }
  }
  return ticketsArr;
}

window.addEventListener('click', function (event) {
  if(event.target.classList.contains('btn-class') 
      && event.target.nodeName.toLowerCase() === 'button'){

        let ticketIdClicked = event.target.classList[1];
        let targetLockBtn = event.target;

        let label = event.target.textContent;

        if(label === 'Locked') {
            modalAreaContainer.style.display = 'block';
            textAreaContainer.contentEditable = true;
            targetLockBtn.textContent = 'Unlocked';
            lockBtnContainer.classList.add('ticket-unlock');
            lockBtnContainer.classList.remove('ticket-lock');
        } else {
            modalAreaContainer.style.display = 'none';
            textAreaContainer.contentEditable = false;
            targetLockBtn.textContent = 'Locked';
            lockBtnContainer.classList.add('ticket-lock');
            lockBtnContainer.classList.remove('ticket-unlock');
        }
        // You can perform additional actions based on the state change if needed
        console.log('Button clicked with id => :', ticketIdClicked);
    
        updateGlobalSourceData(ticketIdClicked, targetLockBtn.textContent);
  }
});

removeBtn.addEventListener('click', function(event){
  isRemoveButtonActive = !isRemoveButtonActive; // Toggle the state

  // Update styles based on the state
  if (isRemoveButtonActive) {
    this.classList.add('red');
    alert('delete button has been activated');
  } else {
    this.classList.remove('red');
  }

});

function removeTicketHandler(event) {
  if(isRemoveButtonActive) {
    this.remove();
  }
}

allticketContainer.forEach(function(eachTicket){
eachTicket.addEventListener('click', removeTicketHandler);
});