import React from 'react'
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
export default  function Cmtitem (props){
 
 return <div  style={styles.divStyle} >
 <h4 style={styles.userStyle}>{props.user}</h4>
 <p style={styles.contentStyle}>{props.content}</p>
 </div>

}