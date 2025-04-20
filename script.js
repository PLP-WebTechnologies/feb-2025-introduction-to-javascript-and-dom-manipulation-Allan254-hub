
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('text-paragraph').textContent = "Sorry to bother you";
});

document.getElementById('change-style-btn').addEventListener('click', function() {
    document.getElementById('main-heading').style.color = "blue";
    document.getElementById('main-heading').style.fontSize = "40px";
});

document.getElementById('add-remove-btn').addEventListener('click', function() {
    const container = document.getElementById('dynamic-container');


    if (document.getElementById('new-element')) {
        container.removeChild(document.getElementById('new-element'));
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'new-element';
        newElement.textContent = "Abracadabra! What a surprise!";
        container.appendChild(newElement);
    }
});
