import  React from "react"
export default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"ooo"
        }
    }
    render(){
        return <div>
            <button onClick={ ()=>{
                this.show()
            }}>按钮</button>
            <hr/>
            {/* <input type="text" value={this.state.msg} readOnly/> */}
            <input type="text" value={this.state.msg} onChange={ (e) =>{
                this.inputValue(e)
            }} ref="text"/>
        </div>
    }
    show(){
        console.log('ok')
    }
    inputValue(e){
    //    const newval=e.target.value
      const newval=this.refs.text.value
    console.log(this.refs.text.value)
    this.setState({
        msg:newval
    })
    }
}