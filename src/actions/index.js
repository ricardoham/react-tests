import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const URL = 'http://jsonplaceholder.typicode.com/comments';
    const response = axios.get(URL)

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}
