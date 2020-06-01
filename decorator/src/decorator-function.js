/*
 * @Descripttion: 方法的装饰
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-04-30 21:52:23
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-04-30 22:25:05
 */

class MyClass {
  @readonly
  @unenumerable
  method(){}
}

function readonly(target, name, descriptor){
  descriptor.writable = false
  return descriptor
}

function unenumerable(target, name, descriptor){
  descriptor.enumerable = false
  return descriptor
}