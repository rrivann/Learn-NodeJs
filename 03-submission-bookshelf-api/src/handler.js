const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: pageCount === readPage,
    reading,
    insertedAt,
    updatedAt,
  };

  if (!name) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  }
  if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }

  books.push(newBook);
  const isSuccess = books.filter((b) => b.id === id).length > 0;

  if (isSuccess) {
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201);
  }

  return h
    .response({
      status: 'fail',
      message: 'Buku gagal ditambahkan',
    })
    .response(500);
};

const getAllBooksHandler = (request) => {
  const {
    reading: readingQuery,
    finished: finishedQuery,
    name: nameQuery,
  } = request.query;

  if (readingQuery === '0') {
    return {
      status: 'success',
      data: {
        books: books
          .filter(({ reading }) => reading === false)
          .map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
      },
    };
  }
  if (readingQuery === '1') {
    return {
      status: 'success',
      data: {
        books: books
          .filter(({ reading }) => reading === true)
          .map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
      },
    };
  }
  if (finishedQuery === '0') {
    return {
      status: 'success',
      data: {
        books: books
          .filter(({ finished }) => finished === false)
          .map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
      },
    };
  }
  if (finishedQuery === '1') {
    return {
      status: 'success',
      data: {
        books: books
          .filter(({ finished }) => finished === true)
          .map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
      },
    };
  }
  if (nameQuery !== undefined) {
    return {
      status: 'success',
      data: {
        books: books
          .filter(({ name }) =>
            name.toLowerCase().includes(nameQuery.toLowerCase()),
          )
          .map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
      },
    };
  }

  return {
    status: 'success',
    data: {
      books: books.map(({ id, name, publisher }) => ({ id, name, publisher })),
    },
  };
};

const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }
  return h
    .response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    })
    .code(404);
};

const updateBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  // const updatedAt = new Date().toDateString;

  if (!name) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      })
      .code(400);
  }
  if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }

  const index = books.findIndex((b) => b.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      // updatedAt
    };
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    .code(404);
};

const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = books.findIndex((b) => b.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    })
    .code(404);
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
};
