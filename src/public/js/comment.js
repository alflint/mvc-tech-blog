const commentSubmitHandler = async (event) => {

    event.preventDefault();

    const text = document.querySelector('#comment-input').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
    const user_id = document.querySelector('#user-id').value.trim();

    if (text) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ text, user_id, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

const deleteComment = async (event) => {
    if (event.value) {
        const response = await fetch(`/api/comment/${event.value}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#comment-submit').addEventListener('click', commentSubmitHandler);