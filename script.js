function toggleDescription(descId) {
    const descriptionDiv = document.getElementById(descId);
    const arrowIcon = descriptionDiv.previousElementSibling.querySelector('.arrow');
    
    // Verifica se a descrição está visível
    const isVisible = descriptionDiv.style.display === "block";

    // Oculta todas as descrições e reseta a rotação das setas
    document.querySelectorAll('.description').forEach(div => div.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(arrow => arrow.style.transform = 'rotate(0deg)');
    
    // Mostra a descrição selecionada e rotaciona a seta se ela não estiver visível
    if (!isVisible) {
        descriptionDiv.style.display = "block";
        arrowIcon.style.transform = 'rotate(90deg)';
    }
}

function showDetails(title, description) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("details-popup").style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-popup").style.display = "none";
}
