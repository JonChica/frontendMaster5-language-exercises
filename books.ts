//He modificado el tsconfig.json incorporando "lib": es2015 para usar el método find().

interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Array<Book>, titleToSearch: string): boolean {
  let book = books.find(book => book.title === titleToSearch);
  return book === undefined ? false : book.isRead;
}

const books: Array<Book> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

let devastacionReaded = isBookRead(books, 'Devastación');
let devastaReaded = isBookRead(books, 'Devasta');

console.log('Is book readed? ', devastacionReaded);
console.log('Is book readed? ', devastaReaded);
