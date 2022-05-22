//配置vue可选的项目,会与后端node的配置文件比对,更新配置. 删除该文件就默认配置
module.exports = {
    //关闭语法检查报错onsave
    lintOnSave:false,
    //vue-cli配置代理服务器,请求->服务器之间的解决跨域问题
    //方式1
    // devServer:{
    //     // 本机作为服务器
    //     // proxy:"http://localhost:5000"
    //     // 腾讯云服务器 49.233.24.151:80
    //     proxy:"http://49.233.24.151:80"
    // },
   
    //方式二
        devServer: {
          proxy: {
            '/api': {  //区分声明请求前缀
              target: 'http://localhost:5000',  //转发服务器的地址
              pathRewrite:{'^/api':''},
              ws: true, //用于支持wensocket
              changeOrigin: true  //用于控制请求中的host值
            },
            '/foo': {   //代理2  简写
              target: '<other_url>'
            }
          }
        }
      
}