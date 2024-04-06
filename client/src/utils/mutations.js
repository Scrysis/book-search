import { gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String, $password: String!){
        loginUser(email: $email, password: $password){
            Auth
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            Auth
        }
    }
`;

export const SAVE_BOOK =gql`
    mutation saveBook($[authors: String], $description: String, $title: String, $bookId: String, $image: String, $link: String){
        saveBook(){
            User
        }
    }
`;

export const REMOVE_BOOK =gql`
    mutation removeBook($bookId: String){
        removeBook(){

        }
    }
`;