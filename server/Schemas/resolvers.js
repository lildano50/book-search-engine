const { Book, User } = require ('../models');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return User.findById(args.id)
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, args, book) => {
            const user = await User.findByIdAndUpdate(args._id, {
                $push: {book: args.bookId}
            }, { new: true});
            return user

        },
        removeBook: async (parent, args, book) => {
            const user = await User.findByIdAndUpdate(args._id, {
                $pull: {book: args.bookId }
            }, {new: true})
            return user;
        }, 
        login: async () => {

        },
    },
};

module.exports = resolvers;