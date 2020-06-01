/*
 * @Descripttion: 装饰实例
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-05-23 08:14:10
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-05-31 19:54:55
 */ 
function mixin(list) {
  return function(target) {
    Object.assign(target.prototype, list)
  }
}

const Foo = {
  foo() {
    console.log('foo')
  }
}

@mixin(Foo)
class Fruit {
  foo() {
    
  }

}

const fruit = new Fruit()
fruit.foo()