
import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import eventProxy from './eventProxy'

class Parent extends Component{
    constructor() {
        super();
        this.state = {
            msg: 'start'
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'end'
            });
        }, 1000);
    }
    render() {
        return <Child_1 msg={this.state.msg} />;
    }
}

class Child_1 extends Component{
    render() {
        return <p>{this.props.msg}</p>
    }
}

ReactDOM.render(
    <Parent/>,document.getElementById('container')
)