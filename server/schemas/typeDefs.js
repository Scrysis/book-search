const typeDefs = `

    type Book {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Number
        savedBooks: [bookSchema]
    }

    type Query {
        me: User
    }

    type Mutation {
        login (email: String, password: String): Auth
        addUser (username: String, email: String, password: String): Auth
        saveBook ([authors: String], description: String, title: String, bookId: String, image: String, link: String): User
        removeBook (bookId: String): User 
    }

    type Auth {
        token: String
        user: User
    }
`;

module.exports = typeDefs;