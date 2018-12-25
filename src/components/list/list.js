import React from 'react';
import './list.css';

const ListItem = (props) => (<div key={props.key} className="sk-list-item">{props.text}</div>);

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items || []
        }
    }

    render = () => {
        return (
            <div className='sk-list'>
                {this.state.items.map(item => ListItem({key: item, text: item}))}
            </div>
        );
    }
};
