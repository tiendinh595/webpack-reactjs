import React from 'react';
import {observable} from 'mobx'
import '../styles/demo.css'

class Store {
    @observable name;
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    onIncrease = () => {
        console.log('ok')
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        return <div>
            <p>{this.state.counter}</p>
            <button>-</button>
            <button onClick={this.onIncrease}>+</button>
        </div>
    }
}

export default Demo;
