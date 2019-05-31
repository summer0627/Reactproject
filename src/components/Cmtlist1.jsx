import React from 'react'
import Cmtitem1 from "@/components/Cmtitem1"
import  cssobj from  '@/css/Cmlist.scss'
import  cssobj1 from  '@/css/Cmtitem.scss'
//入伙在引用某个包的时候,如果这个版是安装在node_modules中,则可以省略弄得_modules
import   "jquery/dist/jquery"
import   'bootstrap/dist/css/bootstrap.css'
console.log(cssobj)
export default class Cmtlist extends React.Component{
    constructor(){
        super()
        this.state={
                CommentList: [
                    { id: 1, user: '张三', content: '哈哈，沙发' },
                    { id: 2, user: '李四', content: '哈哈，板凳' },
                    { id: 3, user: '王五', content: '哈哈，凉席' },
                    { id: 4, user: '赵六', content: '哈哈，砖头' },
                    { id: 5, user: '田七', content: '哈哈，楼下山炮' }
                ]
            }
    }
    render(){
        return <div>
            <h1 className={cssobj.title} >这是评论组件</h1>
            <button className="btn btn-primary">按钮</button>
          
           { this.state.CommentList.map( item =><Cmtitem1 {...item} key={item.id}  ></Cmtitem1>)}
           </div>
    }
}
