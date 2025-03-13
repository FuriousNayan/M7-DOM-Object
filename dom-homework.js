const divOne = document.getElementById('myDiv');
let counter = 0;


let headerOne = document.createElement('h1');
headerOne.innerHTML = 'Welcome to DOM homework';
divOne.appendChild(headerOne);


let paragraphOne = document.createElement('p');
paragraphOne.innerHTML = 'This is your first DOM homework assignment';
divOne.appendChild(paragraphOne);


let unorderedList = document.createElement('ul');
unorderedList.innerHTML = 'List of Fruits'
let liOne = document.createElement('li');
liOne.innerHTML = 'Apple';
let liTwo = document.createElement('li');
liTwo.innerHTML = 'Banana';
let liThree = document.createElement('li');
liThree.innerHTML = 'Orange';
unorderedList.appendChild(liOne)
unorderedList.appendChild(liTwo)
unorderedList.appendChild(liThree)
divOne.appendChild(unorderedList);

headerOne.setAttribute('class', 'highlight');

let buttonOne = document.createElement('button');
buttonOne.innerHTML = 'Add new list item';
divOne.appendChild(buttonOne);

buttonOne.addEventListener('click', function() {
    let newListItem = document.createElement('li');
    newListItem.innerHTML = 'New List Item' + " " + counter++;
    newListItem.style.color = '#' + Math.floor(Math.random() * 15848365).toString(16);
    unorderedList.appendChild(newListItem);

})

divOne.addEventListener('click', function(){
    divOne.style.backgroundColor = '#' + Math.floor(Math.random() * 15848365).toString(16)

})




