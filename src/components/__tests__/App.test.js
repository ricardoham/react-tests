import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    // looks inside the div
    // and checks to see if the CommentBox is in there
    // expect to expect a div
    // toContain a matcher 'Comment Box'
    // toBeTruthy expects a equal of an argument
    // expect(div.innerHTML).toContain('Comment Box');


    // Need to clean the div element from memory
    ReactDOM.unmountComponentAtNode(div);
});