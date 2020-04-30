/*
 * @Descripttion:  配置
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-03-08 09:48:19
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-03-08 09:52:21
 */
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') { //只修改生产环境配置
      return {
        devtool: 'nosources-source-map',
      }
    }
  }
}