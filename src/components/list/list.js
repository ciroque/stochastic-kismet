import React from 'react';
import './list.css';

const ListItem = (props) => (<div className="sk-li">{props.text}</div>);

export default class List extends React.Component {
    constructor(props) {
        super(props);

    }

    render = () => {
        return (<div className='sk-list'/>)
    }
};
