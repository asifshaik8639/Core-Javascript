class CommentBoxManager {
    constructor() {
      this.nestedCommentBoxContainer = document.querySelector('.container');
      this.inputBoxContainer = document.querySelector('.input-container');
      this.addCommentORreplyBtn = document.querySelector('.btn-class-id');
      this.commentListContainer = document.querySelector('#commentList');
      this.commentInput = document.querySelector('#commentInput');
    }
  
    generateUniqueId() {
      const timestamp = new Date().getTime();
      const randomNum = Math.floor(Math.random() * 1000);
      return `id_${timestamp}_${randomNum}`;
    }
  
    createCommentBox(clickedBtnClass, UID, commentText) {
      const id = this.generateUniqueId();
      const commentBoxCont = document.createElement('div');
      commentBoxCont.setAttribute('class', 'container');
  
      commentBoxCont.innerHTML = `<div class="input-container">
                                      <input type="text" 
                                          class="commentInput#${id}" 
                                          placeholder="Enter your reply..."
                                          value="${commentText}">
                                      <button id="replyBtn#${id}" 
                                      class="reply-btn-class">Add Reply</button>
                                  </div>
                                  <ul class="ul-class ${id}"></ul>`;
  
      if (clickedBtnClass === 'reply-btn-class') {
        const selectedUIElement = document.querySelector(`.${UID}`);
        selectedUIElement.append(commentBoxCont);
      } else {
        this.commentListContainer.append(commentBoxCont);
      }
    }
  
    handleButtonClick = (event) => {
      if (event.target.classList.contains('reply-btn-class')) {
        const UGID = event.target?.id?.split('#')[1] || 'NO-UGID';
        this.createCommentBox('reply-btn-class', UGID, '');
      } else if (event.target.classList.contains('add-comment-btn-class')) {
        const commentText = this.commentInput.value;
        if (commentText !== '') {
          this.createCommentBox('add-comment-btn-class', event.target.id, commentText);
          this.commentInput.value = '';
        }
      }
    };
  
    init() {
      window.addEventListener('click', this.handleButtonClick);
    }
  }
  
  // Create an instance of CommentBoxManager and initialize it
  const commentBoxManager = new CommentBoxManager();
  commentBoxManager.init();
  