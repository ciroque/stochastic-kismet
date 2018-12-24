import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

it('renders an empty list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    const list = div.children[0];
    expect(list.children.length).toEqual(0);
    ReactDOM.unmountComponentAtNode(div);
});
