import React from 'react';
import './List.css';

class ListItem extends React.Component {
    render = () => {
        return (
            <div
                onClick={() => this.props.itemClicked(this.props)}
                className={this.props.selected ? 'sk-selected-list-item' : 'sk-list-item'}
            >{this.props.text}</div>
        );
    }
}

export default class List extends React.Component {
    handleItemClicked = (item) => this.props.itemClicked ? this.props.itemClicked(item) : console.warn('no item clicked handler defined...') ;
    render = () => {
        return (
            <div className='sk-list'>
                {this.props.items.map(item => <ListItem itemClicked={this.handleItemClicked} key={item.tag} {...item} />)}
            </div>
        );
    }
};
