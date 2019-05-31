import React from 'react'
import  cssobj from  '@/css/Cmtitem.scss'
console.log(cssobj)
//第一层分装,结构样式向分离
// const divStyle={
//     border:"1px dashed #ccc",padding:"20px",marginTop:"5px",boxShadow:"0 0 10px #ccc"
// }
// const userStyle={
//     fontSize:"17px",fontWeight:800
// }
// const contentStyle={
//     fontSize:"17px",fontWeight:200
// }
//第二层分装,多个对象包装在同一个对象中

//第三层分装,放进一个样式表中
import styles from '@/components/styles'
export default  function Cmtitem1 (props){
 
 return <div   className={cssobj.box } >
 <h4 >{props.user}</h4>

 <p className={[cssobj.content]}>{props.content}</p>
 </div>

}