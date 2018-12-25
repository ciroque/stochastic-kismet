import React from 'react';
import ReactDOM from 'react-dom';
import ActionButton from "./ActionButton";
import renderer from "react-test-renderer";

it('renders the given text', () => {
    const expectedText = 'My Button Text';
    const div = document.createElement('div');
    ReactDOM.render(<ActionButton text={expectedText} />, div);
    expect(div.children[0].innerHTML).toEqual(expectedText);
    ReactDOM.unmountComponentAtNode(div);
});

it('uses the given click handler', (done) => {
    const expectedText = 'My Button Text';
    const clickHandler = () => done();
    const component = renderer.create(
        <ActionButton
            clickHandler={clickHandler}
            text={expectedText}
        />
    );

    component.root.findByType('button').props.onClick();
});
