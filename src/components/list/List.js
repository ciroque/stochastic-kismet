import React from 'react';
import './List.css';

const ListItem = (props) => (<div key={props.key} className="sk-list-item">{props.text}</div>);

export default class List extends React.Component {
    render = () => {
        return (
            <div className='sk-list'>
                {this.props.items.map(item => ListItem({key: item, text: item}))}
            </div>
        );
    }
};
