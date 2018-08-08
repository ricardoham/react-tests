import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    const div = document.createElement('div');
    expect(wrapped.find(CommentBox).length).toEqual(1);

    // looks inside the div
    // and checks to see if the CommentBox is in there
    // expect to expect a div
    // toContain a matcher 'Comment Box'
    // toBeTruthy expects a equal of an argument
    // expect(div.innerHTML).toContain('Comment Box');

    // Need to clean the div element from memory
    // ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})
