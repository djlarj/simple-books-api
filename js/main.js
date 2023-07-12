// Simple Books API

//Variables
const displayBooks = document.querySelector('#displayBooks');
const showAllBooksButton = document.querySelector('.showAllBooksButton')

//Show All Books
showAllBooksButton.addEventListener('click', () => {
    getAllBooks();
})

function getAllBooks() {
    const base_url = `https://simple-books-api.glitch.me/books`;

    fetch(base_url)
    .then(res => res.json() )
    .then(data => {
        displayBooks.innerHTML = '';
        // console.log(data);
        data.forEach( book => {
            const bookId = document.createElement('p');
            bookId.innerText = 'Book ID:' + " " + book.id;
            displayBooks.appendChild(bookId);
            const bookTitle = document.createElement('p');
            bookTitle.innerText = 'Book Title:' + " " + book.name;
            displayBooks.appendChild(bookTitle);
            const bookType = document.createElement('p');
            bookType.innerText = 'Book Type:' + " " + book.type;
            displayBooks.appendChild(bookType);
            const bookAvailable = document.createElement('p');
            bookAvailable.innerText = 'Book Available:' + " " + book.available;
            displayBooks.appendChild(bookAvailable);
            const brElement = document.createElement('br');
            brElement.innerHTML = "<br>";
            displayBooks.appendChild(brElement);
            });//.catch( err => console.log(err)); 
    });
}


//Variables
const showFictionBooksButton = document.querySelector('.showFictionBooksButton')

//Show Fiction Books
showFictionBooksButton.addEventListener('click', () => {
    getFictionBooks();
})

function getFictionBooks() {
    const base_url = `https://simple-books-api.glitch.me/books?type=fiction`;

    fetch(base_url)
    .then(res => res.json() )
    .then(data => {
        displayBooks.innerHTML = '';
        // console.log(data);
        data.forEach( book => {
            const bookId = document.createElement('p');
            bookId.innerText = 'Book ID:' + " " + book.id;
            displayBooks.appendChild(bookId);
            const bookTitle = document.createElement('p');
            bookTitle.innerText = 'Book Title:' + " " + book.name;
            displayBooks.appendChild(bookTitle);
            const bookType = document.createElement('p');
            bookType.innerText = 'Book Type:' + " " + book.type;
            displayBooks.appendChild(bookType);
            const bookAvailable = document.createElement('p');
            bookAvailable.innerText = 'Book Available:' + " " + book.available;
            displayBooks.appendChild(bookAvailable);
            const brElement = document.createElement('br');
            brElement.innerHTML = "<br>";
            displayBooks.appendChild(brElement);
        });//.catch( err => console.log(err)); 
    });
}


//Variables
const showNonFictionBooksButton = document.querySelector('.showNonFictionBooksButton')

//Show Non-Fiction Books
showNonFictionBooksButton.addEventListener('click', () => {
    getNonFictionBooks();
})

function getNonFictionBooks() {
    const base_url = `https://simple-books-api.glitch.me/books?type=non-fiction`;

    fetch(base_url)
    .then(res => res.json() )
    .then(data => {
        displayBooks.innerHTML = '';
        // console.log(data);
        data.forEach( book => {
            const bookId = document.createElement('p');
            bookId.innerText = 'Book ID:' + " " + book.id;
            displayBooks.appendChild(bookId);
            const bookTitle = document.createElement('p');
            bookTitle.innerText = 'Book Title:' + " " + book.name;
            displayBooks.appendChild(bookTitle);
            const bookType = document.createElement('p');
            bookType.innerText = 'Book Type:' + " " + book.type;
            displayBooks.appendChild(bookType);
            const bookAvailable = document.createElement('p');
            bookAvailable.innerText = 'Book Available:' + " " + book.available;
            displayBooks.appendChild(bookAvailable);
            const brElement = document.createElement('br');
            brElement.innerHTML = "<br>";
            displayBooks.appendChild(brElement);
        });//.catch( err => console.log(err)); 
    });
}


//Variables
const resultsLengthInput = document.querySelector('.resultsLengthInput');
const showBooksButton = document.querySelector('.showBooksButton');
const displayLimitedBooks = document.querySelector('#displayLimitedBooks');

//Show Books Based on Results Limit
showBooksButton.addEventListener('click', () => {
    resultsLength = resultsLengthInput.value;
    getLimitedBooks();
})

function getLimitedBooks() {
    const base_url = `https://simple-books-api.glitch.me/books?limit=${resultsLength}`;
    
    fetch(base_url)
    .then(res => res.json() )
    .then(data => {
        displayLimitedBooks.innerHTML = '';
        // console.log(data);
        data.forEach( book => {
            const bookId = document.createElement('p');
            bookId.innerText = 'Book ID:' + " " + book.id;
            displayLimitedBooks.appendChild(bookId);
            const bookTitle = document.createElement('p');
            bookTitle.innerText = 'Book Title:' + " " + book.name;
            displayLimitedBooks.appendChild(bookTitle);
            const bookType = document.createElement('p');
            bookType.innerText = 'Book Type:' + " " + book.type;
            displayLimitedBooks.appendChild(bookType);
            const bookAvailable = document.createElement('p');
            bookAvailable.innerText = 'Book Available:' + " " + book.available;
            displayLimitedBooks.appendChild(bookAvailable);
            const brElement = document.createElement('br');
            brElement.innerHTML = "<br>";
            displayLimitedBooks.appendChild(brElement);
        });//.catch( err => console.log(err));
    });
}


//Variables
const bookLookupInput = document.querySelector('.bookLookupInput');
const bookLookupButton = document.querySelector('.bookLookupButton');
const displayBookDetails = document.querySelector('#displayBookDetails');

//Show Book Details
bookLookupButton.addEventListener('click', () => {
    bookLookup = bookLookupInput.value;
    getBookDetails();
})

function getBookDetails() {
    const base_url = `https://simple-books-api.glitch.me/books/${bookLookup}`;
    
    fetch(base_url)
    .then( res => {
        return res.json();
    }).then( (book) => {  
        displayBookDetails.innerHTML = '';
        // console.log(book);  
        const bookDetailId = document.createElement('p');
        bookDetailId.innerText = 'Book ID:' + " " + book.id;
        displayBookDetails.appendChild(bookDetailId);
        const bookDetailTitle = document.createElement('p');
        bookDetailTitle.innerText = 'Book Title:' + " " + book.name;
        displayBookDetails.appendChild(bookDetailTitle);
        const bookDetailAuthor = document.createElement('p');
        bookDetailAuthor.innerText = 'Book Author:' + " " + book.author;
        displayBookDetails.appendChild(bookDetailAuthor);
        const bookDetailIsbn = document.createElement('p');
        bookDetailIsbn.innerText = 'Book ISBN:' + " " + book.isbn;
        displayBookDetails.appendChild(bookDetailIsbn);
        const bookDetailType = document.createElement('p');
        bookDetailType.innerText = 'Book Type:' + " " + book.type;
        displayBookDetails.appendChild(bookDetailType);
        const bookDetailPrice = document.createElement('p');
        bookDetailPrice.innerText = 'Book Price:' + " " + '$' + book.price;
        displayBookDetails.appendChild(bookDetailPrice);
        const bookDetailCurrentStock = document.createElement('p');
        bookDetailCurrentStock.innerText = 'Book Current Stock:' + " " + book['current-stock'];
        displayBookDetails.appendChild(bookDetailCurrentStock);
        const bookDetailAvailable = document.createElement('p');
        bookDetailAvailable.innerText = 'Book Available:' + " " + book.available;
        displayBookDetails.appendChild(bookDetailAvailable);
    }).catch( err => console.log(err)); 
}


//Back-to-Top button
const btn = $('#button');

$(window).scroll(function() {
    btn.toggleClass('show', $(window).scrollTop() > 100);
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 100);
});