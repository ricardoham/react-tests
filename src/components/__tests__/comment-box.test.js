import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/comment-box';
import Root from 'Root';

let wrapped;

// Execute before each test run
beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
})

// Execute afeter each test run
afterEach(() => {
    wrapped.unmount();
})

it('has a text are and a button', () => {
    // Find can find element as well
    // console.log(wrapped.find('texarea'));
    // console.log(wrapped.find('button'));
    
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// describe looks like a wrapper when you need to use same method 
// to it statament em comum
describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a text area that users cant type in', () => {
        
        // To thinking that user are tiping 
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });

    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});