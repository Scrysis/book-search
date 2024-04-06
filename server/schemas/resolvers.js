const {Book, User} = require ('../models');

const resolvers = {
    Query: {
        user: async(parent, args) => {
            return await User.findById(args.id);
        },
        users: async () => {
            return await User.find({}).populate('books';)
        },
        books: async () => {
            return await Book.find
        }
    },

}