//小明

var moduleA=(function () {
  //导出对象
  var obj={};


  var name ="小明";
  var age=22;
  function sum(num1,num2) {
    return num1+num2
  }
  var flag=true;
  if(flag){
    console.log(sum(10,20));
  }


  obj.flag=flag;
  obj.sum=sum;
  return obj;
})();

//modeleA=obj


//commomJs=================


// var name ="小明";
// var age=22;
// function sum(num1,num2) {
//   return num1+num2
// }
// var flag=true;
// if(flag){
//   console.log(sum(10,20));
// }
////导出
// module.exports={
//   flag:flag,
//   sum:sum
// };

//这样写现在不行，因为没有人帮你解析这个解构   什么可以解析：webpack, webpack正常运行依赖于node环境，在node环境中可以写