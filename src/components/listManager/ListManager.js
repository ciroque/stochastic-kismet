import React from 'react';
import Label from "../label/Label";
import List from "../list/List";
import ActionButton from "../actionButton/ActionButton";
import './ListManager.css';

export default class ListManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                '.',
                '..',
                '...',
                '....',
                '.....'
            ],
            shuffledItems: []
        }
    }

    addItem = () => {
        const newItem = new Date().getMilliseconds();
        console.log(`...>>> ${newItem}`);
        this.setState((ps) => ({items: [...ps.items, newItem]}), () => console.warn(this.state.items));
    };

    // Fisher-Yates shuffle: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    // see also: http://www.i-programmer.info/programming/theory/2744-how-not-to-shuffle-the-kunth-fisher-yates-algorithm.html
    fisherYates = (list) => {
        const shuffled = list.slice(0);
        const length = shuffled.length - 1;
        for (var index = length; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            const current = shuffled[index];
            shuffled[index] = shuffled[randomIndex];
            shuffled[randomIndex] = current;
        }
        return shuffled;
    };

    reset = () => this.setState({shuffledItems: []});

    shuffle = () => {
        if(this.state.items.length > 0) {
            const shuffled = this.fisherYates(this.state.items);
            this.setState({shuffledItems: shuffled});
        }
    };

    render = () => {
        return (
            <div className='list-manager'>
                <div className='source-list-label'><Label text='Source List' /></div>
                <div className='source-list'><List items={this.state.items}/></div>

                <div className='shuffle-button'><ActionButton text='Shuffle' clickHandler={() => this.shuffle()}/></div>
                <div className='select-button'><ActionButton text='Select' clickHandler={() => this.addItem()}/></div>
                <div className='reset-button'><ActionButton text='Reset' clickHandler={() => this.reset()}/></div>

                <div className='shuffled-list-label'><Label text='Shuffled List' /></div>
                <div className='shuffled-list'><List items={this.state.shuffledItems}/></div>
            </div>
        );
    }
}
