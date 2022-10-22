function findAuthorById(authors, id) {
  const authorById = authors.find((authors) => authors.id === id);
  return authorById;
}

function findBookById(books, id) {
  const bookByID = books.find((books) => books.id === id);
  return bookByID;
}

function partitionBooksByBorrowedStatus(books) {
  const resultF = books.filter((book) => book.borrows[0].returned === false);
  const resultT = books.filter((book) => book.borrows[0].returned === true);
  return [resultF, resultT];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    account.returned = borrow.returned;
    return account
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
