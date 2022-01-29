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
.then( res => {
    return res.json();
}).then( (facts) => {
    displayBooks.innerHTML = '';
    console.log(facts);
    const bookId1 = document.createElement('p');
    bookId1.innerText = 'Book ID:' + " " + facts[0].id;
    displayBooks.appendChild(bookId1);
    const bookTitle1 = document.createElement('p');
    bookTitle1.innerText = 'Book Title:' + " " + facts[0].name;
    displayBooks.appendChild(bookTitle1);
    const bookType1 = document.createElement('p');
    bookType1.innerText = 'Book Type:' + " " + facts[0].type;
    displayBooks.appendChild(bookType1);
    const bookAvailable1 = document.createElement('p');
    bookAvailable1.innerText = 'Book Available:' + " " + facts[0].available;
    displayBooks.appendChild(bookAvailable1);
    const br1 = document.createElement('br');
    br1.innerHTML = "<br>";
    displayBooks.appendChild(br1);
    const bookId2 = document.createElement('p');
    bookId2.innerText = 'Book ID:' + " " + facts[1].id;
    displayBooks.appendChild(bookId2);
    const bookTitle2 = document.createElement('p');
    bookTitle2.innerText = 'Book Title:' + " " + facts[1].name;
    displayBooks.appendChild(bookTitle2);
    const bookType2 = document.createElement('p');
    bookType2.innerText = 'Book Type:' + " " + facts[1].type;
    displayBooks.appendChild(bookType2);
    const bookAvailable2 = document.createElement('p');
    bookAvailable2.innerText = 'Book Available:' + " " + facts[1].available;
    displayBooks.appendChild(bookAvailable2);
    const br2 = document.createElement('br');
    br2.innerHTML = "<br>";
    displayBooks.appendChild(br2);
    const bookId3 = document.createElement('p');
    bookId3.innerText = 'Book ID:' + " " + facts[2].id;
    displayBooks.appendChild(bookId3);
    const bookTitle3 = document.createElement('p');
    bookTitle3.innerText = 'Book Title:' + " " + facts[2].name;
    displayBooks.appendChild(bookTitle3);
    const bookType3 = document.createElement('p');
    bookType3.innerText = 'Book Type:' + " " + facts[2].type;
    displayBooks.appendChild(bookType3);
    const bookAvailable3 = document.createElement('p');
    bookAvailable3.innerText = 'Book Available:' + " " + facts[2].available;
    displayBooks.appendChild(bookAvailable3);
    const br3 = document.createElement('br');
    br3.innerHTML = "<br>";
    displayBooks.appendChild(br3);
    const bookId4 = document.createElement('p');
    bookId4.innerText = 'Book ID:' + " " + facts[3].id;
    displayBooks.appendChild(bookId4);
    const bookTitle4 = document.createElement('p');
    bookTitle4.innerText = 'Book Title:' + " " + facts[3].name;
    displayBooks.appendChild(bookTitle4);
    const bookType4 = document.createElement('p');
    bookType4.innerText = 'Book Type:' + " " + facts[3].type;
    displayBooks.appendChild(bookType4);
    const bookAvailable4 = document.createElement('p');
    bookAvailable4.innerText = 'Book Available:' + " " + facts[3].available;
    displayBooks.appendChild(bookAvailable4);
    const br4 = document.createElement('br');
    br4.innerHTML = "<br>";
    displayBooks.appendChild(br4);
    const bookId5 = document.createElement('p');
    bookId5.innerText = 'Book ID:' + " " + facts[4].id;
    displayBooks.appendChild(bookId5);
    const bookTitle5 = document.createElement('p');
    bookTitle5.innerText = 'Book Title:' + " " + facts[4].name;
    displayBooks.appendChild(bookTitle5);
    const bookType5 = document.createElement('p');
    bookType5.innerText = 'Book Type:' + " " + facts[4].type;
    displayBooks.appendChild(bookType5);
    const bookAvailable5 = document.createElement('p');
    bookAvailable5.innerText = 'Book Available:' + " " + facts[4].available;
    displayBooks.appendChild(bookAvailable5);
    const br5 = document.createElement('br');
    br5.innerHTML = "<br>";
    displayBooks.appendChild(br5);
    const bookId6 = document.createElement('p');
    bookId6.innerText = 'Book ID:' + " " + facts[5].id;
    displayBooks.appendChild(bookId6);
    const bookTitle6 = document.createElement('p');
    bookTitle6.innerText = 'Book Title:' + " " + facts[5].name;
    displayBooks.appendChild(bookTitle6);
    const bookType6 = document.createElement('p');
    bookType6.innerText = 'Book Type:' + " " + facts[5].type;
    displayBooks.appendChild(bookType6);
    const bookAvailable6 = document.createElement('p');
    bookAvailable6.innerText = 'Book Available:' + " " + facts[5].available;
    displayBooks.appendChild(bookAvailable6);
    const br6 = document.createElement('br');
    br6.innerHTML = "<br>";
    displayBooks.appendChild(br6);
}).catch( err => console.log(err)); 
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
.then( res => {
    return res.json();
}).then( (facts) => {
    displayBooks.innerHTML = '';
    console.log(facts);
    const bookId1 = document.createElement('p');
    bookId1.innerText = 'Book ID:' + " " + facts[0].id;
    displayBooks.appendChild(bookId1);
    const bookTitle1 = document.createElement('p');
    bookTitle1.innerText = 'Book Title:' + " " + facts[0].name;
    displayBooks.appendChild(bookTitle1);
    const bookType1 = document.createElement('p');
    bookType1.innerText = 'Book Type:' + " " + facts[0].type;
    displayBooks.appendChild(bookType1);
    const bookAvailable1 = document.createElement('p');
    bookAvailable1.innerText = 'Book Available:' + " " + facts[0].available;
    displayBooks.appendChild(bookAvailable1);
    const br1 = document.createElement('br');
    br1.innerHTML = "<br>";
    displayBooks.appendChild(br1);
    const bookId3 = document.createElement('p');
    bookId3.innerText = 'Book ID:' + " " + facts[1].id;
    displayBooks.appendChild(bookId3);
    const bookTitle3 = document.createElement('p');
    bookTitle3.innerText = 'Book Title:' + " " + facts[1].name;
    displayBooks.appendChild(bookTitle3);
    const bookType3 = document.createElement('p');
    bookType3.innerText = 'Book Type:' + " " + facts[1].type;
    displayBooks.appendChild(bookType3);
    const bookAvailable3 = document.createElement('p');
    bookAvailable3.innerText = 'Book Available:' + " " + facts[1].available;
    displayBooks.appendChild(bookAvailable3);
    const br3 = document.createElement('br');
    br3.innerHTML = "<br>";
    displayBooks.appendChild(br3);
    const bookId4 = document.createElement('p');
    bookId4.innerText = 'Book ID:' + " " + facts[2].id;
    displayBooks.appendChild(bookId4);
    const bookTitle4 = document.createElement('p');
    bookTitle4.innerText = 'Book Title:' + " " + facts[2].name;
    displayBooks.appendChild(bookTitle4);
    const bookType4 = document.createElement('p');
    bookType4.innerText = 'Book Type:' + " " + facts[2].type;
    displayBooks.appendChild(bookType4);
    const bookAvailable4 = document.createElement('p');
    bookAvailable4.innerText = 'Book Available:' + " " + facts[2].available;
    displayBooks.appendChild(bookAvailable4);
    const br4 = document.createElement('br');
    br4.innerHTML = "<br>";
    displayBooks.appendChild(br4);
    const bookId6 = document.createElement('p');
    bookId6.innerText = 'Book ID:' + " " + facts[3].id;
    displayBooks.appendChild(bookId6);
    const bookTitle6 = document.createElement('p');
    bookTitle6.innerText = 'Book Title:' + " " + facts[3].name;
    displayBooks.appendChild(bookTitle6);
    const bookType6 = document.createElement('p');
    bookType6.innerText = 'Book Type:' + " " + facts[3].type;
    displayBooks.appendChild(bookType6);
    const bookAvailable6 = document.createElement('p');
    bookAvailable6.innerText = 'Book Available:' + " " + facts[3].available;
    displayBooks.appendChild(bookAvailable6);
    const br6 = document.createElement('br');
    br6.innerHTML = "<br>";
    displayBooks.appendChild(br6);
}).catch( err => console.log(err)); 
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
.then( res => {
    return res.json();
}).then( (facts) => {
    displayBooks.innerHTML = '';
    console.log(facts);
    const bookId2 = document.createElement('p');
    bookId2.innerText = 'Book ID:' + " " + facts[0].id;
    displayBooks.appendChild(bookId2);
    const bookTitle2 = document.createElement('p');
    bookTitle2.innerText = 'Book Title:' + " " + facts[0].name;
    displayBooks.appendChild(bookTitle2);
    const bookType2 = document.createElement('p');
    bookType2.innerText = 'Book Type:' + " " + facts[0].type;
    displayBooks.appendChild(bookType2);
    const bookAvailable2 = document.createElement('p');
    bookAvailable2.innerText = 'Book Available:' + " " + facts[0].available;
    displayBooks.appendChild(bookAvailable2);
    const br2 = document.createElement('br');
    br2.innerHTML = "<br>";
    displayBooks.appendChild(br2);
    const bookId5 = document.createElement('p');
    bookId5.innerText = 'Book ID:' + " " + facts[1].id;
    displayBooks.appendChild(bookId5);
    const bookTitle5 = document.createElement('p');
    bookTitle5.innerText = 'Book Title:' + " " + facts[1].name;
    displayBooks.appendChild(bookTitle5);
    const bookType5 = document.createElement('p');
    bookType5.innerText = 'Book Type:' + " " + facts[1].type;
    displayBooks.appendChild(bookType5);
    const bookAvailable5 = document.createElement('p');
    bookAvailable5.innerText = 'Book Available:' + " " + facts[1].available;
    displayBooks.appendChild(bookAvailable5);
    const br5 = document.createElement('br');
    br5.innerHTML = "<br>";
    displayBooks.appendChild(br5);
}).catch( err => console.log(err)); 
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
    console.log(data);
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
        });
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
    console.log(book);  
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