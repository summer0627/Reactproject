import React from 'react'
import ReactDom from 'react-dom'
class Human extends React.Component{
    constructor(){
        super()
        
        this.state={
            msg:"大家好,我是class身上创建出来的组件"
        }
    }
render(){
    this.state.msg="class身上的数据修改了哦"
    return <div>这是class创建的组件欢迎你{this.props.name}
    <br />
    {this.state.msg}
    
    </div>
}
}

const user ={
    name:"李四",
    age:15,
    gender:'男'
}
ReactDom.render(<Human {...user}></Human>,document.getElementById('app'))
