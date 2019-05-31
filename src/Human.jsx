import React from 'react'
//创建react组件,必须导入react

export default function Human (props){
    //组件中的pros永远是只读的
    return <div>人类组件,欢迎你   {props.name},您是{props.age}岁吗</div>
}