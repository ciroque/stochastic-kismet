import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListManagementButton from './ListManagementButton';

it('renders the given text', () => {
    const expectedText = 'My Button Text';
    const div = document.createElement('div');
    ReactDOM.render(<ListManagementButton text={expectedText} />, div);
    expect(div.children[0].innerHTML).toEqual(expectedText);
    ReactDOM.unmountComponentAtNode(div);
});

it('uses the given click handler', (done) => {
    const expectedText = 'My Button Text';
    const clickHandler = () => done();
    const component = renderer.create(
        <ListManagementButton
            clickHandler={clickHandler}
            text={expectedText}
        />
    );

    component.root.findByType('button').props.onClick();
});