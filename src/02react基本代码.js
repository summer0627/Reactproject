console.log('ook') 
import React from "react"
import Reactdom from "react-dom"
// const myh1=React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的h1')
// const mydiv=React.createElement('div',null,'这是一个div元素',myh1)
// const mydiv=<div id="mydiv" title="thiS is my div">安装babel-loader@7</div>
// Reactdom.render(mydiv,document.getElementById('app'))

const arr=['路飞',"娜美","山治",'乔巴']
let newArr=[]
arr.forEach( item =>{
    const temp=<h1 key={item}>{item}</h1>
    newArr.push(temp)
})

const maparr=arr.map( item =>{
    return item+"??"
})
Reactdom.render( 
<div>{maparr}
<br/>
{newArr}
{<br/>}
{arr.map(item => item+";;;;")}
</div>,document.getElementById('app'))