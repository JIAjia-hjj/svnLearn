//闭包解决了命名冲突的问题，但是造成了代码不可复用

(function () {
//  1.想使用flag

  if(moduleA.flag){
    console.log('小明是天才');
  }
//2.使用sum函数
  console.log( moduleA.sum(40,50));

})();

// //commonJS写法导入
// var {flag,sum} =require('./aaa.js');//对象的解构
//
// //等价于
// var aaa =require('./aaa.js');
// var flag=aaa.flag;
// var sum=aaa.sum;
//  sum(20,30);