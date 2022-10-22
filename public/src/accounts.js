function findAccountById(accounts, id) {
  const accountById = accounts.find((account) => account.id === id);
  return accountById;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => lastNameA.name.last < lastNameB.name.last ? -1: 1)
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
return books.reduce((total, book) => {
  const idCount = book.borrows.filter(borrow => borrow.id === account.id).length
  return total + idCount},0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book => book.borrows.some(borrow => (!borrow.returned && borrow.id === account.id)));
  const result = [];
  borrowedBooks.forEach(book => {
    const bookAuthor = findAuthorById(authors, book.authorId);
    result.push({
      id: book.id,
      title: book.title,
      genre: book.genre,
      authorId: book.authorId,
      author: bookAuthor,
      borrows: book.borrows,
    });
  });
  return result;
}

function borrowsById (book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
