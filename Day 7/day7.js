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

// Task 5