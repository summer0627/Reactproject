import React from 'react'
import ReactDom from 'react-dom'
function Preson(){
    return <div>Hello 组件</div>
}

import Human from '@/Human'
const person ={
     name:"大大",
     gender:'男' ,
     age:20
}
//属性扩散传递语法



ReactDom.render(<Human  {...person}></Human>,document.getElementById('app'))
ReactDom.render(<div></div>,document.getElementById('app'))
