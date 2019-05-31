class Animal {
    constructor (name,age,gender) {
        this.name=name
        this.age=age
        this.gender=gender
    }
    wang (){
        console.log('这是动物的实例方法')
    }
    //在class内部,通过static修饰的就是静态属性
    static info="wangwang"
    static sayEnglish=function(){
        console.log('这是class身上的静态方法')
    }
    
}
var dog=new Animal('阿黄',14,'熊')
console.log(dog.name)
console.log(dog.age)
console.log(dog)
console.log(Animal.info)//汪汪
Animal.sayEnglish()//这是class身上的静态方法
dog.wang()
function Human (name,age,gender){
    this.name=name
    this.age=age
    this.gender=gender
}
Human.info="aaaa"
//直接挂在在构造函数上面的属性叫做静态属性
Human.prototype.sayHi=function(){
  console.log('这是构造函数的实例方法')
}
Human.sayH=function(){
    console.log('这是构造函数的静态方法')
}
//实力属性:用构造函数创建的实例点出来的属性和方法
var person =new Human('张三',15,'男')
// console.log(person)
// console.log(person.age)
// person.sayHi()//大家好
// console.log(Human.info)//aaa
// console.log(person)
Human.sayH()//这是构造函数的静态方法
