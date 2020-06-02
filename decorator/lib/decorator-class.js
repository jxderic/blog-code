var _class;

/*
 * @Descripttion: 装饰class
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-04-30 21:36:08
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-04-30 21:36:09
 */
let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true;
}