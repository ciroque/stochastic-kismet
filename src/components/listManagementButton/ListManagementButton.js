import React from 'react';
import './ListManagementButton.css';

export default class ListManagementButton extends React.Component {
    constructor(props) {
        super(props);
        const clickHandler = this.props.clickHandler || (() => { console.warn('no handler defined...')});
        this.state = { clickHandler: clickHandler }
    }

    render = () => {
        return (
            <button
                className='sk-list-management-button'
                onClick={() => this.state.clickHandler()}
            >{this.props.text}</button>
        );
    }
};
