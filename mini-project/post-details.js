// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = JSON.parse(url.searchParams.get('info'));

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(responce => responce.json())
    .then(postInfo => {

        console.log(postInfo)
        const id = postInfo.id;
        const title = postInfo.title;
        const body = postInfo.body;
        const userId = postInfo.userId;

        const postDiv = document.createElement('div');
        document.body.appendChild(postDiv);
        const postId = document.createElement('p');
        postId.innerText = `id: ${id}`;
        const postTitle = document.createElement('p');
        postTitle.innerText = `title: ${title}`;
        const postBody = document.createElement('p');
        postBody.textContent = `body: ${body}`;
        const postUserId = document.createElement('p');
        postUserId.innerText = `userId: ${userId}`;


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(responce => responce.json())
            .then(comments => {
                const comentsBlock = document.createElement('div');
                document.body.appendChild(comentsBlock);
                 for (const comment of comments) {
                        const commentId = document.createElement('p');
                        commentId.innerText = `comment id: ${comment.id}`;
                        const commentPostId = document.createElement('p');
                        commentPostId.innerText = `comment postId: ${comment.postId}`;
                        const commentName = document.createElement('p');
                        commentName.innerText = `comment name: ${comment.name}`;
                        const commentBody = document.createElement('p');
                        commentBody.textContent = `comment body: ${comment.body}`;
                        const commentEmail = document.createElement('p');
                        commentEmail.textContent = `comment email: ${comment.email}`;

                        comentsBlock.append(commentId,commentPostId, commentName, commentBody, commentEmail)
                }
            })


        postDiv.append(postId, postTitle, postBody, postUserId)
    })