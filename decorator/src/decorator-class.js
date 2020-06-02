/*
 * @Descripttion: 装饰class
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-04-30 21:36:08
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-05-23 08:14:36
 */
@annotation(true)
class MyClass {}

// function annotation(target) {
//   target.annotated = true
// }
// 装饰器传参
function annotation(isAnnotated) {
  return function(target) {
    target.annotated = isAnnotated
  }
}
