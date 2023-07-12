// Simple Books API

// Variables
const displayBooks = document.querySelector('#displayBooks');
const displayLimitedBooks = document.querySelector('#displayLimitedBooks');
const displayBookDetails = document.querySelector('#displayBookDetails');
const resultsLengthInput = document.querySelector('.resultsLengthInput');
const bookLookupInput = document.querySelector('.bookLookupInput');

// Functions
function createBookElement(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
}

async function fetchAndDisplayBooks(url, displayElement) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayElement.innerHTML = '';

        data.forEach((book) => {
            const bookId = createBookElement('p', `Book ID: ${book.id}`);
        const bookTitle = createBookElement('p', `Book Title: ${book.name}`);
        const bookType = createBookElement('p', `Book Type: ${book.type}`);
        const bookAvailable = createBookElement('p', `Book Available: ${book.available}`);
        const brElement = createBookElement('br', '');

        displayElement.appendChild(bookId);
        displayElement.appendChild(bookTitle);
        displayElement.appendChild(bookType);
        displayElement.appendChild(bookAvailable);
        displayElement.appendChild(brElement);
        });
    } catch (err) {
        console.log(err);
    }
}

// Event listener for "Enter" key press on input fields
resultsLengthInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        showBooksButton.click();
    }
});

bookLookupInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        bookLookupButton.click();
    }
});

// Show All Books
const showAllBooksButton = document.querySelector('.showAllBooksButton');
showAllBooksButton.addEventListener('click', () => {
    fetchAndDisplayBooks('https://simple-books-api.glitch.me/books', displayBooks);
});

// Show Fiction Books
const showFictionBooksButton = document.querySelector('.showFictionBooksButton');
showFictionBooksButton.addEventListener('click', () => {
    fetchAndDisplayBooks('https://simple-books-api.glitch.me/books?type=fiction', displayBooks);
});

// Show Non-Fiction Books
const showNonFictionBooksButton = document.querySelector('.showNonFictionBooksButton');
showNonFictionBooksButton.addEventListener('click', () => {
    fetchAndDisplayBooks('https://simple-books-api.glitch.me/books?type=non-fiction', displayBooks);
});

// Show Books Based on Results Limit
const showBooksButton = document.querySelector('.showBooksButton');
showBooksButton.addEventListener('click', async () => {
    const resultsLength = resultsLengthInput.value;
    const url = `https://simple-books-api.glitch.me/books?limit=${resultsLength}`;
    fetchAndDisplayBooks(url, displayLimitedBooks);
});

// Show Book Details
const bookLookupButton = document.querySelector('.bookLookupButton');
bookLookupButton.addEventListener('click', async () => {
    const bookLookup = bookLookupInput.value;
    const url = `https://simple-books-api.glitch.me/books/${bookLookup}`;

    try {
        const response = await fetch(url);
        const book = await response.json();
        displayBookDetails.innerHTML = '';

        const bookDetailId = createBookElement('p', `Book ID: ${book.id}`);
        const bookDetailTitle = createBookElement('p', `Book Title: ${book.name}`);
        const bookDetailAuthor = createBookElement('p', `Book Author: ${book.author}`);
        const bookDetailIsbn = createBookElement('p', `Book ISBN: ${book.isbn}`);
        const bookDetailType = createBookElement('p', `Book Type: ${book.type}`);
        const bookDetailPrice = createBookElement('p', `Book Price: $${book.price}`);
        const bookDetailCurrentStock = createBookElement('p', `Book Current Stock: ${book['current-stock']}`);
        const bookDetailAvailable = createBookElement('p', `Book Available: ${book.available}`);

        displayBookDetails.appendChild(bookDetailId);
        displayBookDetails.appendChild(bookDetailTitle);
        displayBookDetails.appendChild(bookDetailAuthor);
        displayBookDetails.appendChild(bookDetailIsbn);
        displayBookDetails.appendChild(bookDetailType);
        displayBookDetails.appendChild(bookDetailPrice);
        displayBookDetails.appendChild(bookDetailCurrentStock);
        displayBookDetails.appendChild(bookDetailAvailable);
    } catch (err) {
        console.log(err);
    }
});

  
//Back-to-Top button
const btn = $('#button');

$(window).scroll(function() {
    btn.toggleClass('show', $(window).scrollTop() > 100);
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 100);
});