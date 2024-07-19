// Day 7 Objects
// Activity 1 Object Creation and Access

// Task 1

const book = {
    'title': 'A Day In Life',
    'author': 'Aryan Sharma',
    'year': 2024
};
console.log(book);

// Task 2

console.log(book.title);
console.log(book.author);

// Activity 2 Object Methouds

// Task 3 and 4

book.info = function(year){
    this.year = year;
    // return `Title of the book is ${book.title}, by author ${book.author}.`;
    return `Title of the book is ${book.title}, by author ${book.author} in the year ${book.year}.`;

}
console.log(book.info(2020))

// Activity 3 Nested Objects

// Task 5,6

const library = {
    name: 'Open Library',
    books: [
        { title: 'Computer wit Networks' },
        { title: 'Operating the System' },
        { title: 'Data with Structure and Algorithms' }
    ]
};
console.log(library);
console.log(library.name);
console.log(library.books);

// Activity 4 The `this` keyword

// Task 7

const obj = {
    name: 'Open Library',
    showName: function() {
        console.log(this.name);
    }
};
obj.showName();

// Activity 5 Object Iteration

// Task 8

const lib = {
    name: 'Open Library',
    books: {
        book1: { title: 'Computer Networks' },
        book2: { title: 'Operating Systems' },
        book3: { title: 'Data Structures and Algorithms' }
    }
};

for (const key in lib.books) {
    if (lib.books.hasOwnProperty(key)) {
        console.log(lib.books[key].title);
    }
}

// Task 9

const libr = {
    name: 'Open Library',
    books: {
        book1: { title: 'Computer Networks' },
        book2: { title: 'Operating Systems' },
        book3: { title: 'Data Structures and Algorithms' }
    }
};

Object.keys(libr.books).forEach(key => {
    console.log(libr.books[key].title);
});

Object.values(libr.books).forEach(book => {
    console.log(book.title);
});




