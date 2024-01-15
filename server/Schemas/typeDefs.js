const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: ID!
        authors: [String]!
        description: String
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(_id: String): [User]
    }

    type Mutation {
        login (email: String!, password: String!): Auth
        addUser (username: String!, email: String!, password: String!): Auth
        saveBook (bookId: ID!, authors: [String]!, description: string, title: String!, image: String, link: String): User
        removeBook (bookId: ID!): User 
    }

`;

module.exports = typeDefs;