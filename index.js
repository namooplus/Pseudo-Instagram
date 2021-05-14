let isHeartClicked = false;

function createNewComment(content)
{
    const commentor = document.createTextNode('min.i.stop');
    const commentorLayout = document.createElement('a');
    commentorLayout.classList.add('bold');
    commentorLayout.appendChild(commentor);

    const comment = document.createTextNode(' ' + content);

    const commentLayout = document.createElement('div');
    commentLayout.classList.add('content-font');
    commentLayout.classList.add('mt5');
    commentLayout.appendChild(commentorLayout);
    commentLayout.appendChild(comment);

    document.querySelector('.post-content-list').appendChild(commentLayout);
}

function initEvent()
{
    // Heart
    document.getElementById('heart-button').addEventListener('click', function(){
        const heartState = document.getElementById('heart-state');
        if (isHeartClicked) // Cancel heart
        {
            this.classList.remove('fas');
            this.classList.remove('red');
            this.classList.add('far');
            isHeartClicked = false;
            heartState.innerText = Number.parseInt(heartState.innerText) - 1;
        }
        else // Heart
        {
            this.classList.remove('far');
            this.classList.add('fas');
            this.classList.add('red');
            isHeartClicked = true;
            heartState.innerText = Number.parseInt(heartState.innerText) + 1;
        }

        // Click animation
        this.classList.remove('react');
        this.offsetWidth = this.offsetWidth;
        this.classList.add('react');
    });

    // Comment
    document.querySelector('.post-comment-section').addEventListener('submit', (event) => {
        // Prevent page reloading
        event.preventDefault();
    
        // Add a new comment
        const input = document.getElementById('post-comment-input');
        if (input.value.trim() != '')
        {
            createNewComment(input.value);
            input.value = '';
        }
    });
}

initEvent();
