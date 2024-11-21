function toggleDescription(element) {
    const description = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach((desc) => {
        if (desc !== description) {
            desc.style.opacity = '0';
            desc.style.display = 'none'; // Esconde imediatamente ao clicar em outra opção
            desc.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
        }
    });

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        requestAnimationFrame(() => {
            description.style.opacity = '1';
        });
        arrow.style.transform = 'rotate(90deg)';
    } else {
        description.style.opacity = '0';
        setTimeout(() => {
            description.style.display = 'none';
        }, 200); // Tempo reduzido para desaparecer
        arrow.style.transform = 'rotate(0deg)';
    }
}

function showPopup() {
    document.getElementById('detailsPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('detailsPopup').style.display = 'none';
}
