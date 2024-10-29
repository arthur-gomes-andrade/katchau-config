function toggleDescription(descId) {
    const descriptionDiv = document.getElementById(descId);
    const isVisible = descriptionDiv.style.display === "block";


    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(div => div.style.display = 'none');

    
    if (!isVisible) {
        descriptionDiv.style.display = "block";
    } else {
        descriptionDiv.style.display = "none";
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

function toggleDescription(descId) {
    const descriptionDiv = document.getElementById(descId);
    const isVisible = descriptionDiv.style.display === "block";

    
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(div => div.style.display = 'none');

    
    if (!isVisible) {
        descriptionDiv.style.display = "block";
    } else {
        descriptionDiv.style.display = "none";
    }

    
    const arrow = event.target.querySelector('.arrow');
    if (arrow) {
        arrow.classList.toggle('down', !isVisible);
    }
}


function toggleDescription(descId) {
    const descriptionDiv = document.getElementById(descId);
    const isVisible = descriptionDiv.style.display === "block";


    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(div => div.style.display = 'none');

    const allArrows = document.querySelectorAll('.arrow');
    allArrows.forEach(arrow => arrow.classList.remove('down'));

    
    if (!isVisible) {
        descriptionDiv.style.display = "block";
    } else {
        descriptionDiv.style.display = "none";
    }

    
    const arrow = event.target.querySelector('.arrow');
    if (arrow) {
        arrow.classList.toggle('down', !isVisible); 
    }
}
