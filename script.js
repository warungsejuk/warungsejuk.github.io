const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '10px';
});

document.addEventListener("DOMContentLoaded", loadComments);

function addComment() {
    let commentInput = document.getElementById("commentInput");
    let commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Komentar tidak boleh kosong!");
        return;
    }

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    commentInput.value = "";
    loadComments();
}

function loadComments() {
    let commentList = document.getElementById("commentList");
    commentList.innerHTML = "";

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.forEach((comment, index) => {
        let li = document.createElement("li");
        li.textContent = comment;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteComment(index);
        };

        li.appendChild(deleteBtn);
        commentList.appendChild(li);
    });
}

function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    loadComments();
}
