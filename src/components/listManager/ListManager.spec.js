import React from 'react';
import ReactDOM from 'react-dom';
import ListManager from './ListManager';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListManager />, div);
    ReactDOM.unmountComponentAtNode(div);
});