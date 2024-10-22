document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Default values
    const defaultUsername = "TechSavvyStudent";
    const defaultTitle = "My Adventures in Web Development";
    const defaultContent = "Web development has been a thrilling journey for me. From learning HTML and CSS to diving into JavaScript frameworks, every step has been a challenge. In this post, I’ll share my experiences and the projects that have shaped my skills along the way.";

    // Get values from the input fields
    const username = document.getElementById('username').value || defaultUsername;
    const title = document.getElementById('title').value || defaultTitle;
    const content = document.getElementById('content').value || defaultContent;

    // Check if any of the values are empty (they won't be due to defaults)
    if (!username || !title || !content) {
        document.getElementById('error-message').innerText = 'Please fill out all fields.';
        return;
    }

    const blogPost = {
        username,
        title,
        content,
    };

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';
});

