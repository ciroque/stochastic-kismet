import React from 'react';
import ReactDOM from 'react-dom';
import Label from './Label';

it('renders the given text', () => {
    const expectedText = 'This is my text';
    const div = document.createElement('div');
    ReactDOM.render(<Label text={expectedText} />, div);
    const label = div.children[0];
    expect(label.textContent).toEqual(expectedText);
    ReactDOM.unmountComponentAtNode(div);
});
