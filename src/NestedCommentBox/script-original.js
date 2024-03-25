
let nestedCommentBoxContainer = document.querySelector('.container');

let inputBoxContainer = document.querySelector('.input-container');

let addCommentORreplyBtn = document.querySelector('.btn-class-id');

let commentListContainer = document.querySelector('#commentList');

let commentInput = document.querySelector('#commentInput');

function generateUniqueId() {
    // Using a combination of a timestamp and a random number
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
  
    // Concatenating the timestamp and random number to create a unique ID
    const uniqueId = `id_${timestamp}_${randomNum}`;
  
    return uniqueId;
}

// ADDING TICKET TO DOM
function createCommentBox(clickedBtnClass, UID, commentText) {

    let id =  generateUniqueId();
    let commentBoxCont = document.createElement("div");
    commentBoxCont.setAttribute("class", "container");

    commentBoxCont.innerHTML =  `<div class="input-container">
                                    <input type="text" 
                                        class="commentInput#${id}" 
                                        placeholder="Enter your reply..."
                                        
                                        value = "${commentText}">
                                    <button id="replyBtn#${id}" 
                                    class="reply-btn-class">Add Reply</button>
                                </div>
                                <ul class="ul-class ${id}"></ul>`

    if(clickedBtnClass == 'reply-btn-class') {
        let selectedUIElement = document.querySelector(`.${UID}`);
        selectedUIElement.append(commentBoxCont);
    } else {
        commentListContainer.append(commentBoxCont);
    }
}

window.addEventListener('click', (event) => {

    if(event.target.classList.contains('reply-btn-class')) {
        console.log('btn id value => ', event.target.id);
        let UGID = !!event.target?.id && event.target.id?.split('#')[1] || 'NO-UGID';

       //  let inputReplyElement = document.querySelector(`.commentInput#${UGID}`);
       //  let replyText = inputReplyElement.value;
       //  if(replyText !== '') {
            createCommentBox('reply-btn-class', UGID, '');
        //     inputReplyElement.value
       //  }
    } 
    else if(event.target.classList.contains('add-comment-btn-class')) {
        console.log('btn id value => ', event.target.id);
        let inputElement = document.querySelector('#commentInput');
        let commentText = inputElement.value;

        if(commentText !== '') {
            createCommentBox('add-comment-btn-class', event.target.id, commentText);
            inputElement.value = '';
        }

    }
})
