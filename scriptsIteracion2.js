const newDiv = document.createElement('div');
const newP = document.createElement('p');
const newDivWithP = document.createElement('div');
const dynamicP = document.createElement('p');

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const insertHereP = document.createElement('p');
const insertHereText = document.createTextNode('Voy en medio!');
insertHereP.appendChild(insertHereText);

const insertNewP = document.createElement('p');

function addContent() {
    const newDivWithP = document.createElement('div');
    const newText = document.createTextNode('Nuevo párrafo');
    const dynamicText = document.createTextNode('Soy dinámico');

    const wubbaLuubaH2 = document.querySelector('h2.fn-insert-here');
    const wubbaLuubaText = document.createTextNode('Wubba Lubba dub dub');

    document.body.appendChild(newDiv);
    document.body.appendChild(newDivWithP);
    newP.appendChild(newText);
    newDivWithP.appendChild(newP);

    document.body.appendChild(dynamicP);
    dynamicP.appendChild(dynamicText);

    wubbaLuubaH2.appendChild(wubbaLuubaText);
};

function addParagraph() {
    document.body.appendChild(newDivWithP);
    for(let i = 0; i <= 6; i++ ) {
        newDivWithP.innerHTML += `<p>Nuevo párrafo</p>`;
    };
};

const list = document.createElement('ul');

function createList() {
    document.body.appendChild(list);
    apps.forEach(function (element) {
        list.innerHTML += `<li>${element}</li>`;
    })
};

function deleteNode() {
    const removeMe = document.querySelectorAll('.fn-remove-me');
    console.log(removeMe);
    removeMe.forEach(function(element) {
        document.body.removeChild(element);    
    });
};

function insertHere(newNode, targetNode) {
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
};

function insertP() {
    const insertHereDiv = document.querySelectorAll('div.fn-insert-here');

    insertHereDiv.forEach(function(element) {
        element.innerHTML = '<p>Voy dentro!</p>'
    });
}

window.onload = function() {
    const selectedDiv = document.querySelector('div');

    addContent();
    addParagraph();
    createList();
    deleteNode();
    insertHere(insertHereP, selectedDiv);
    insertP();
};