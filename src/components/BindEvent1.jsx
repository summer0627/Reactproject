import React from 'react'
export default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"哈哈哈"
        }
    }
    render(){
        return <div>
            <button 
            onClick={ () =>{
                this.show("he",'id')
            }}
           
            >onslick事件</button>
             <p>{this.state.msg}</p>
        </div>
    }
    show=(ag1,ag2) =>{
      this.setState({
          msg:"msg被修改了"+ ag1 + ag2 
      },function(){
          //如果想拿到最新的state,就需要在第二个参数里面传入一个回调函数,在回调里面传入一个药输出的值
          console.log(this.state.msg)
      })
    
}
}
