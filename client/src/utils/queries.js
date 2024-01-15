import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me (_id: String) {
        user {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }    
`;