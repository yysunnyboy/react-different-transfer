react组件之间的不用组件之间的通信，父子组件之间的通信--》this.props方式;兄弟组件之间的通信也可以通过父组件作为桥梁进行。但是对于嵌套层级较深的组件，会显得比较麻烦代码不易维护，引入js观察者模式：事件的派发和订阅来解决这个问题，项目中的demo写的比较简单，后续深入研究！