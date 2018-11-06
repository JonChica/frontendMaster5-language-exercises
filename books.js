//Modified tsconfig.json to add "lib": es2015 to use find() method without 'tsc' warnings.
function isBookRead(books, titleToSearch) {
    var book = books.find(function (book) { return book.title === titleToSearch; });
    return book === undefined ? false : book.isRead;
}
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
var devastacionReaded = isBookRead(books, 'Devastación');
var devastaReaded = isBookRead(books, 'Devasta');
console.log('Is book readed? ', devastacionReaded);
console.log('Is book readed? ', devastaReaded);
