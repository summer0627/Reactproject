import React from 'react'
import ReactDom from 'react-dom'

//继承的语法 class 子类 extends 父类
class Human {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    //相当于在原型上面定义一个公共的方法
    sayHello (){
    console.log('大家好')
    }

}
class American extends Human {
    constructor(name,age){
        super(name,age)
    }
}
const a1=new American('jack',20,"IDcard")
console.log(a1)
a1.sayHello()
class chinese extends Human {
    constructor(name,age,IDcard){
        super(name,age)
        this.IDcard=IDcard
        //为子类挂载独有的IDcard
    }
  
}
const a2=new chinese('张三',22,"610311****")
console.log(a2)
a2.sayHello()