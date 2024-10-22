document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('postContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Display blog posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>${post.username}</strong></p>`;
        postContainer.appendChild(postElement);
    });

    // Toggle light/dark mode
    const toggleButton = document.getElementById('toggleMode');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
