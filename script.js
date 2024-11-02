function toggleDescription(element) {
    const description = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Fechar outras descrições
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach((desc) => {
        if (desc !== description) {
            desc.style.display = 'none'; // Fecha a descrição instantaneamente
            desc.style.opacity = '0'; // Reseta a opacidade para 0
            desc.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
        }
    });

    // Alternar a descrição atual
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block'; // Exibe a descrição
        requestAnimationFrame(() => {
            description.style.opacity = '1'; // Abre a descrição com animação
        });
        arrow.style.transform = 'rotate(90deg)';
    } else {
        description.style.display = 'none'; // Define como none instantaneamente
        arrow.style.transform = 'rotate(0deg)';
    }
}

function showPopup() {
    document.getElementById('detailsPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('detailsPopup').style.display = 'none';
}
