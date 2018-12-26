import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders an empty list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List items={[]} />, div);
    const list = div.children[0];
    expect(list.children.length).toEqual(0);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a single item', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List items={['One']}/>, div);
    expect(div.children[0].children.length).toEqual(1);
});

it('renders three items', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List items={['One', 'Two', 'Three']}/>, div);
    expect(div.children[0].children.length).toEqual(3);
});
