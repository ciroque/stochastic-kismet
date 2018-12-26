import React from 'react';
import './ListManagement.css';

export default class ListManagement extends React.Component {
    constructor(props) {
        super(props);
        const clickHandler = this.props.clickHandler || (() => { console.warn('no handler defined...')});
        this.state = {
            clickHandler: clickHandler,
            text: ''
        }
    }

    handleTextChange = (event) => {
        this.setState({text: event.target.value})
    };

    handleAddClick = (event) => {
        this.props.addItem(this.state.text);
        this.setState({text: ''});
    };

    render = () => {
        return (
            <div>
                <input
                    type='text'
                    placeholder='Enter item text...'
                    value={this.state.text}
                    className='sk-list-management-input'
                    onChange={this.handleTextChange}
                />
                <button
                    className='sk-list-management-button'
                    onClick={this.handleAddClick}
                    disabled={this.state.text.length === 0}
                    title="Adds the entered text to the Source List..."
                >+</button>
                <button
                    className='sk-list-management-button'
                    onClick={() => this.state.clickHandler()}
                    disabled={this.props.canDelete}
                >-</button>
            </div>
        );
    }
};
