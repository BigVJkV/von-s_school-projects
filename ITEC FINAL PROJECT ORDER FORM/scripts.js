function openModal(title, imageUrl, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('flavorModal').style.display = "block";
}

function closeModal() {
    document.getElementById('flavorModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('flavorModal')) {
        document.getElementById('flavorModal').style.display = "none";
    }
}
