import React from 'react';
import './ActionButton.css';

export default class ActionButton extends React.Component {
    constructor(props) {
        super(props);
        const clickHandler = this.props.clickHandler || (() => { console.warn('no handler defined...')});
        this.state = { clickHandler: clickHandler }
    }

    render = () => {
        return (
            <button
                className='sk-action-button'
                onClick={() => this.state.clickHandler()}
            >{this.props.text}</button>
        );
    }
}
