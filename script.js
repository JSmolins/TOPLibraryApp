//Empty array to contain book objects
let myLibrary = [];

//Book constructor with parameters
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.bookInfo = function () {
    //     return this.title + " by " + this.author + ", " + this.pages +
    //         ", " + this.read;
    // }
}

//Calls Book constructor and adds new book objects to myLibrary array
function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages, read));
}

//Loops through array to create DOM cards out of book objects
function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        createCard(i);
    }
}

//Dynamically create DOM element cards representing book object attributes
let cardContainer = document.querySelector('#card-container');

function createCard(i) {
    //Create a card and append to Card Container
    let card = document.createElement("div");
    card.setAttribute('class', 'card');
    cardContainer.appendChild(card);

    //Create title node and append to Card
    let bookTitle = document.createElement("p");
    bookTitle.setAttribute('class', 'book-text');
    bookTitle.innerHTML = '"' + myLibrary[i].title + '"';
    card.appendChild(bookTitle);

    //Create author node and append to card
    let bookAuthor = document.createElement("p");
    bookAuthor.setAttribute('class', 'book-text');
    bookAuthor.innerHTML = myLibrary[i].author;
    card.appendChild(bookAuthor);

    //Create pages node and append to card
    let bookPages = document.createElement("p");
    bookPages.setAttribute('class', 'book-text');
    bookPages.innerHTML = myLibrary[i].pages + " pages";
    card.appendChild(bookPages);

    //Create read button node and append to card
    let bookRead = document.createElement("button");
    bookRead.setAttribute('type', 'button');
    bookRead.setAttribute('class', 'read-button');
    bookRead.innerHTML = "Read";
    card.appendChild(bookRead)

    //Create remove button node and append to card
    let bookRemove = document.createElement("button");
    bookRemove.setAttribute('type', 'button');
    bookRemove.setAttribute('class', 'remove-button');
    bookRemove.innerHTML = "Remove Book";
    card.appendChild(bookRemove);
}

// function readButtonStyle(){
//     if (this.read === "read"){
//         bookRead.setAttribute('background-color', '#9fff9c');
//         bookRead.innerHTML = "Read";
//     } else {
//         bookRead.setAttribute('background-color', '#ff9c9c');
//         bookRead.innerHTML = "Not read";
//     }
// }


// Modal Logic
let modalWindow = document.querySelector('#add-book-modal'); //DOM object for modal
let modalButton = document.querySelector('#new-book-btn'); //DOM object for add book button
let addBookBtn = document.querySelector('#add-book'); //DOM object form button for submit

//When user clicks add book button, calls addBook() function
addBookBtn.onclick = () => addBook();

//When user clicks add book button, open the modal
modalButton.onclick = () => modalWindow.style.display = "block";

//Clicking outside modal contents closes modal
window.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}

//Sets form field user inputs to new book constructor parameters and creates a new card
function addBook(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    // let read = document.querySelector('#is-read').value;
    myLibrary.push(new Book(title, author, pages));
    createCard(myLibrary.length - 1);
    modalWindow.style.display = "none";
}