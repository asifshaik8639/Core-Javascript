const { ApolloServer, gql } = require('apollo-server');

// Define a schema using the SDL
const typeDefs = gql`
  type Author {
    id: ID
    name: String
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(title: String, authorName: String): Book
  }
`;

// Sample data for authors and books
const authors = [
  { id: '1', name: 'Author 1' },
  { id: '2', name: 'Author 2' },
];

const books = [
  { id: '1', title: 'Book 1', authorId: '1' },
  { id: '2', title: 'Book 2', authorId: '1' },
  { id: '3', title: 'Book 3', authorId: '2' },
];

// Define resolvers
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Author: {
    books: (author) => books.filter((book) => book.authorId === author.id),
  },
  Book: {
    author: (book) => authors.find((author) => author.id === book.authorId),
  },
  Mutation: {
    addBook: (_, { title, authorName }) => {
      const authorId = String(authors.length + 1);
      const bookId = String(books.length + 1);
      const newAuthor = { id: authorId, name: authorName };
      const newBook = { id: bookId, title, authorId };
      authors.push(newAuthor);
      books.push(newBook);
      return newBook;
    },
  },
};

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
