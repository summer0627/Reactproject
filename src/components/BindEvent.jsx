import React from 'react'
export default class BindEvent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <button onClick={function(){console.log('ok')}}>按钮</button>
            <hr />
            <button onMouseOver={this.myMouseOver}>按钮</button>
            <hr />
            <button onClick={()=>{
                this.show()
                console.log('ooo')
            }}>按钮</button>
        </div>
    }
    myMouseOver (){
        console.log('经过按钮了')
    }
    show= () => {
        console.log('箭头函数的方式执行')
    }
}
