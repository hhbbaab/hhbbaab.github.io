window.onload = function() {
    var form = document.querySelector('#post-form form');
    form.onsubmit = function(event) {
        event.preventDefault();

        var title = form.querySelector('#title').value;
        var author = form.querySelector('#author').value;
        var content = form.querySelector('#content').value;

        var post = document.createElement('li');
        post.innerHTML = '<h3>' + title + '</h3><p>Posted by: ' + author + ' | Date: ' + new Date().toLocaleDateString() + '</p><p>' + content + '</p>';

        var postsList = document.querySelector('#posts ul');
        postsList.insertBefore(post, postsList.firstChild);

        form.reset();
    };
};
