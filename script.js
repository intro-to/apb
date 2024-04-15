// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Simulated latest comments
    const latestComments = [
        "Great post!",
        "I enjoyed reading this.",
        "Looking forward to more content."
    ];

    const latestCommentsList = document.getElementById("latest-comments");

    latestComments.forEach(comment => {
        const li = document.createElement("li");
        li.textContent = comment;
        latestCommentsList.appendChild(li);
    });
});
