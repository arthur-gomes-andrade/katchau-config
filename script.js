function toggleDescription(element) {
    const description = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach((desc) => {
        if (desc !== description) {
            desc.style.display = 'none'; 
            desc.style.opacity = '0'; 
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
        description.style.display = 'none'; 
        arrow.style.transform = 'rotate(0deg)';
    }
}

function showPopup() {
    document.getElementById('detailsPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('detailsPopup').style.display = 'none';
}
