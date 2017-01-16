
import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import eventProxy from './eventProxy'

class Parent extends Component{
    render() {
        return (
            <div>
                <Child_1/>
                <Child_2/>
            </div>
        );
    }
}
// componentDidUpdate 与 render 方法与上例一致
class Child_1 extends Component{
    constructor(){
        super();
        this.state = {
            msg: 'start child-1 message'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            // 发布 msg 事件
            eventProxy.trigger('msg', 'end');
        }, 2000);
    }
    render() {
        return   <p>'this is from child_1:'{this.state.msg}</p>
    }
}
// componentDidUpdate 方法与上例一致
class Child_2 extends Component{
    constructor(){
      super();
      this.state = {
          msg: 'start'
      }
    }
    componentDidMount() {
        // 监听 msg 事件
        eventProxy.on('msg', (msg) => {
            this.setState({
                msg
            });
        });
    }
    render() {
        return <p>'this is message from 1:--->'{this.state.msg}</p>
    }
}
ReactDOM.render(
    <Parent/>,document.getElementById('container')
)