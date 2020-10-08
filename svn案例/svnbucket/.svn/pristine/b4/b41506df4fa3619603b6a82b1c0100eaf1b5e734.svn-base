创建一个 Vue 实例

### 数据与方法
    -当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。

### 实例生命周期钩子
    - 生命周期钩子的 this 上下文指向调用它的 Vue 实例
    - created 钩子可以用来在一个实例被创建之后执行
### v-if

   - 如果想切换多个元素,可以把一个 <template> 元素当做不可见的包裹元素，并在上面使用 v-if。
   - 这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性
   - v-show：
      - 带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。
      - v-show 不支持 <template> 元素，也不支持 v-else。
   - v-if和v-show的区别：
      - v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
      - v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
      - 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
      - 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
      - 不推荐同时使用 v-if 和 v-for，v-for 具有比 v-if 更高的优先级。



 ### v-if---会根据条件进行渲染和不渲染
     - true 渲染DOM
     - false 不渲染DOM   
     - 需要非常频繁的切换，使用v-show较好；
       如果在运行时条件很少改变，使用v-if较好
- 在模板中放太多的逻辑会让模板过重难以维护
- 想在模板中多次引用此处功能时，就会更加难以处理。
- 所以，对于任何复杂逻辑，使用计算属性
- 1.使用方法可以把这种复杂逻辑封装起来(每使用一次就调用一次，重复使用效率不高)
- 2.使用计算属性（不要让模板逻辑太乱，解决性能问题）
   - 本质是一个方法，不是方法，当属性来用，不能用于事件处理函数
- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一key属性：
### 自定义指令
  - 什么是：除了使用vue提供的内置指令，我们可以自定义一些自己的指令
  - 什么时候需要：当你需要不可避免的DOM的时候，使用自定义指令来解决
  - 怎么使用？
    - 注册
      - 全局注册：在任何组件中都可以使用
      - 局部注册：只能在当前组件中使用
      - 如果多个组件中使用---定义成全局的
    - 使用
      - 要加上v-前缀 
      - 驼峰命名，在使用是需要把驼峰转小写用横杆连接

### 在客户端存储数据 （本地存储）
- localStorage-没有时间限制的数据存储
  - getItem('key')---取值
  - setItem('key','value')---赋值
      - setItem('key',JSON.stringify({foo:'bar'}))
  - removeItem()---删除
- sessionStorage-针对一个session的数据存储
  
```
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```
- 变异方法---会改变原始数组
   - push()、pop()、shift()、unshift()、splice()、sort()、reverse()
- 替换数组（非变异数组）---不会改变原始数组，而总是返回一个新数组
   - filter()、concat() 和 slice()
箭头函数的this定义：箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。



vuejs知识
1、认识vue.js

+ CDN 开发环境 生产环境  选择就近的服务器
+ 下载和引入
+ npm install vue



2、vue基础语法
3、组件化开发
4、vue-cli 基于webpack  
   webpack 
   vue-cli
   vue-cli2
   vue-cli3
5、vue-router 前端路由
6、vuex  vue状态管理
7、网络封装 
   axios的使用
8、项目实战
9、项目部署 
   NGINX服务器
   远程Linux上的NGINX部署
10、vuejs原来相关 
   响应式原理(双向绑定)
   源码

   

vue的mvvm：
view===dom
viewModel===vue实例  数据绑定（model数据绑定在view里,响应式，最新）   vue指令事件响应绑定到model,对dom界面做监听，回调model函数
model===js


方法、函数 
方法：methods
函数：function
定义在类里面是方法，定义外面函数

release/debug
生命周期(钩子函数hook)：事务诞生到消亡的过程
vue生命周期：
beforeCreate(){
}
created(){  //做网络请求,赋值data,渲染dem
}
mounted(){
}

代码规范：缩进4个空格，2个空格

cli->editconfig 2空格

{{}}======mustache语法











### 一.邂逅后Vuejs

##### 1.1.认识Vuejs

+ 为什么学习Vuejs：Vuejs前端必备的一个技能
+ Vue的读音：类似view
+ Vue的渐近式
  + 可以将vue作为应用的一部分嵌入
  + 如果希望将更多的业务逻辑使用vue实现，那么vue的核心库及生态系统
+ Vue的特点，很多特点和web开发中常见的高级功能：
  + 解藕视图和数据
  + 可复用的组件
  + 前端路由技术
  + 状态管理
  + 虚拟DOM
+ vue全家桶： VueCore+vue-router+vuex 

##### 1.2.安装Vue

+ CDN引入，选择就近的服务器
+ 下载引入
+ npm安装

##### 1.3.Vue的初体验

+ hello Vuejs
  + mustache->体验vue响应式。

+ Vue列表展示
  + v-for
  + 后面给数组追加元素的时候，新元素也可以在界面中渲染出来           

+ Vue计数器小案例
  + 事件监听：click->methods

##### 1.4.Vue中的MVVM

+ view：dom
+ viewModel：vue实例  数据绑定（model数据绑定在view里,响应式，最新）， vue指令事件响应绑定到model,对dom界面做监听，回调model函数
  model:js

![](D:\我的文档\Desktop\vue\vue_note\images\Vue中的MVVM.jpg)

##### 1.5.创建Vue时，opentions可以放那些东西

+ el:

+ data:

+ methods:

+ 生命周期(钩子函数hook)：事务诞生到消亡的过程

  ```JS
  //const app=new Vue(options)
  const app=new Vue({
       el:'#app',
       data:{
           message:'你好啊'
       },
       methods:{
           
       },
      beforeCreate(){
      }
      created(){  //做网络请求,赋值data,渲染dem
      }
      mounted(){
      }
  });
  ```

  

### 二.插值语法

+ mustache：{{}}，mustache语法中，不仅仅可以写变量，也可以写就简单的表达式

+ v-once：第一次展示出来，之后message改变，不会变

+ v-html：可以解析标签

+ v-text：不可以解析标签，

+ v-pre :告诉vue不要解析这个节点内部的内容，让浪费时间

+ v-cloak:斗篷，解决表达式闪烁的问题

  ```html
  <!--1.v-text:使用{{}}的比较多，如果都使用v-text又比较麻烦-->
  <div id="app" v-cloak>
     <span v-text="msg"></span>
  </div>
  <!--2.v-clock:来控制代码要不要显示
       在vue解析之前，div中有一个属性v-clock;
       在vue解析之后，div中没有一个属性v-cloak-->
  <style>
      [v-cloak]{
        display: none;
      }
  </style>
  <div id="app" v-cloak>{{message}}</div>
  
  ```

### 三.v-bind(语法糖：)

##### 3.1.v-bind绑定基本属性

+ v-bind:src

+ :href

  ```HTML
   <a  :href="aHref">百度一下</a>
   <a  v-bind:href="aHref">百度一下</a>
  ```

##### 3.2.v-bind动态绑定class

+ 对象语法：v-bind: class="{类名变量1:boolean,类名变量2:boolean}"

  ![](images\vbind动态绑定对象.jpg)

  ```html
   <h2 class="title" :class="{'active':isActive,'line':isLine}">{{message}}</h2>
   <!--过于复杂，可以放在一个methods或者computed中-->
   <h2 class="title" :class="getClasses()">{{message}}</h2>
    <script>
      const app=new Vue({
        el:'#app',
        data:{
           message:'你好啊',
          isActive:true,
          isLine:true
        },
        methods:{
          getClasses(){
            return {active:this.isActive,line:this.isLine}
          }
        }
      });
    </script>
  ```

+ 数组语法:  v-bind: class="[类名变量1,类名变量2]" 

  ```html
   <h2 class="title" :class="['active','line']"> {{message}}</h2>
  <!--不加双引号是变量-->
  <h2 class="title" :class="[active,line]"> {{message}}</h2>
  <h2 class="title" :class="getClasses()"> {{message}}</h2>
   <script>
      const app=new Vue({
        el:'#app',
        data:{
           message:'你好啊',
           active:'aaaa',
           line:'bbbb'
        },
        methods:{
          getClasses(){
            return [this.active,this.line]
          }
        }
      });
    </script>
  ```

##### 3.3.v-bind动态绑定style

+ 对象语法: v-bind:style="{key(css属性名)：value(属性值变量)}"

  ```html
  <h2 :style="{fontSize:'50px'}">{{message}}</h2>
  <h2 :style="{fontSize:fontSize+'px',color:finalColor}">{{message}}</h2>
  <h2 :style="getStyles()">{{message}}</h2>
    <script>
      const app=new Vue({
        el:'#app',
        data:{
           message:'你好啊',
          fontSize:100,
          finalColor:'red'
        },
        methods:{
          getStyles(){
            return {fontSize:this.fontSize+'px',color:this.finalColor}
          }
        }
      });
    </script>
  ```

+ 数组语法:  v-bind:style="[style属性值变量1,style属性值变量2]"

  ```html
  <h2 :style="[baseStyle,baseStyle1]">{{message}}</h2>
  <script>
      const app=new Vue({
        el:'#app',
        data:{
           message:'你好啊',
          baseStyle:{backgroundColor:'red'},
          baseStyle1:{fontSize:'100px'}
        }
      });
  </script>
  ```

###  四.计算属性 computed

![](images\什么是计算属性.jpg)

##### 4.1.案例一：firstName+lastName

```html
 <div id="app">
   <!--1.插值法：直接拼接：语法过于繁琐-->
   <h2>{{firstName+' '+lastName}}</h2>
   <!--2.方法：通过定义methods， 显示4次的化话，函数会调用4次-->
   <h2>{{getFullName()}}</h2>
   <!--3.计算属性：通过computed  显示4次，计算属性只会调用1次，性能更高，有缓存-->
   <h2>{{fullName}}</h2>
 </div>
 <script>
   const app=new Vue({
     el:'#app',
     data:{
       firstName:'Lebron',
       lastName:'James'
     },
     //计算属性，按属性的方式
     computed:{
       fullName(){
         return this.firstName+' '+this.lastName
       }
     },
     methods:{
       getFullName() {
         return this.firstName+' '+this.lastName
       }
     }
   });
 </script>
```

##### 4.2.案例二：books->price

```html
<div id="app">
     <h2>总价格：{{totalPrice}}</h2>
</div>
<script>
    const app=new Vue({
        el:'#app',
        data:{
            books:[
               {id:110,name:'Unix编程艺术',price:119},
               {id:111,name:'代码大全',price:110},
               {id:112,name:'深入理解计算机原理',price:200},
               {id:113,name:'现在操作系统',price:98}
             ]
        },
        methods:{
            getTotalPrice(){
                //如果是方法的话每次执行都得调用，性能差
                let result=0;
                for (let i =0;i<this.books.length;i++){
                    result=result+this.books[i].price
                }
                return result;
            },
        },
        computed:{
            totalPrice(){
                let result=0;
                // for (let i =0;i<this.books.length;i++){
                //   result=result+this.books[i].price
                // }
                // for (let i in this.books) {
                //   result=result+this.books[i].price
                // }
                for (let book of this.books) {
                    result=result+book.price
                }
                return result;
            }
        }
    });
</script>
```

##### 4.3. 计算属性的本质

+ fullname:{get(){},set(){}}

  ````html
  <h2>{{fullName}}</h2>
  <script>
      const app=new Vue({
        el:'#app',
        data:{
           firstName:'Kobe',
          lastName:'Nryant'
        },
        computed:{
          //只有get方法时的简写
          // fullName(){
          //   return this.firstName+' '+this.lastName
          // },
          fullName:{
             //set一般有参数,给fullName设置值
             set(newValue){
               //this.firstName='213333333333333';
                 //输入：app.fullName='Lebron James'
               console.log('------'+newValue);//-----Lebron James）
               const names=newValue.split(' ');
               this.firstName=names[0];//Lebron
               this.lastName=names[1];// James
             },
            get(){
              return this.firstName+ James' '+this.lastName
            }
          }
        }
      });
    </script>
  ````
  
  

##### 4.4. 计算属性和methods对比

+ 计算属性在多次使用时，只会调用一次
+ 它是有缓存的，性能更高 

#### 五.事件监听 v-on(语法糖@)

#####  5.1. 事件监听基本使用

+ @click="方法名"

##### 5.2.  参数问题

+ btnClick =====>btnClick(event)

+ btnClick(abc,$event) ->btnClick(abc,event)

+ 无参，'()'可以不添加。

  ```html
  <button @click=" btn1Click()">按钮1</button>
  <button @click=" btn1Click">按钮2</button>
  ```

+ 在事件定义时，写方法时省率了小括号，但是方法本身时需要一个参数的,这个时候vue默认将浏览器生成的event事件对象作为参数传入到方法中

  ```html
  <!--事件没有参-->
  <button @click="btn2Click">按钮5</button>  
  <script>
  const app=new Vue({
        el:'#app',
        methods:{
          btn2Click(event) {//方法需要参，默认传过来的是浏览器生成的event事件对象
            console.log('----------'+event);
          },
        }
      });
  </script>
  ```

+ 方法定义时，我们需要event对象，同时又需要其他参数。在调用方法时，如何手动的获取浏览器参数的event对象：$event

  ```html
  <!--需要event对象，同时又需要其他参数-->
  <button @click="btn3Click(123,$event)">按钮8</button>
  <script>
  const app=new Vue({
        el:'#app',
        methods:{
          btn3Click(abc,event) {//接收参数
            console.log('----------'+event);
          },
        }
      });
  </script>
  ```

+ 如果函数需要参数，但是没有传入，那么函数(方法)的形参为undefined

#####  5.3 修饰符

+ .stop：  阻止冒泡 event.stopPropagation()

+ .prevent ：阻止默认事件 event.preventDefault()

+ .监听某个键盘的键帽： 如.enter，监听回车

  ```html
  <input type="text" @keyup.enter="keyUp">
  ```

+ .once ：只触发一次

+ .native： 监听组件根元素的原生事件

### 六.条件判断

#####  6.1. v-if/v-else-if/v-else

```html
<div id="app">
    <!--不推荐这样使用，用计算属性-->
    <h2 v-if="score>=90">优秀</h2>
    <h2 v-else-if="score>=80">良好</h2>
    <h2 v-else-if="score>=60">及格</h2>
    <h2 v-else>不及格</h2>
     <!--用计算属性-->
    <h1>{{result}}</h1>
</div>
<script>
    const app=new Vue({
      el:'#app',
      data:{
        score:99
      },
      computed:{
        result(){
          let showMessage="";
          if(this.score>=90){
            showMessage="优秀";
          }else if(this.score>=80){
            showMessage="良好";
          }else if(this.score>=60){
            showMessage="及格";
          }else{
            showMessage="不及格";
          }
          return showMessage;
        }
      }
    });
</script>
```

#####  6.2. 登录小案例

```html
<div id="app">
    <span v-if="isUser">
        <label for="username"> 用户账号</label>
        <input type="text" id="username" placeholder="用户账号" key="username">
    </span>
    <span v-else>
        <label for="email"> 用户邮箱</label>
        <input type="text" id="email" placeholder="用户邮箱" key="email">
    </span>
    <button @click="isUser=!isUser">切换类型</button>
</div>
<script src="../js/vue.js"></script>
<script>
    const app=new Vue({
        el:'#app',
        data:{
            isUser:true
        }
    });
</script>
```

+ 切换了,但是input的东西没有清掉  ,虚拟dom的作用,直接复用之前的label和input,不会清空用户的输入
+ 解决加个key,key相同复用,不同不复用

#####  6.3. v-show和v-if区别

+ v-if：当我们条件为false时,包含v-if指令的元素,根本不会存在dom中
+ v-show：当条件为false时,v-show只是给我们的元素添加了一个行内样式:display:none
+ 显示隐藏频繁切换--v-show
+ 当只有一次切换--v-if      (服务器传过来的数据决定某一大段dom要不要渲染,没有数据就不要渲染)

### 七.循环遍历v-for

##### 7.1. 遍历数组

+ v-for,重新渲染出虚拟dom,然后根据虚拟DOM对真实的dom进行修改

```html
<!--1.遍历的过程中,没有使用索引值(下标值)-->
<li v-for="item in names">{{item}}</li>
<!--2.遍历的过程中,获取索引值(下标值)-->
<li v-for="(item,index) in names">{{index+1}}.{{item}}</li>

<script>
    const app=new Vue({
        el:'#app',
        data:{
            names:['why','hhh','lll','OOO']
        }
    });
</script>
```

##### 7.2.遍历对象

```html
<!--1.value:在遍历对象的过程中.如果只是获取一个值,那么获取到的是value-->
<li v-for="item in info">{{item}}</li>
<!--2.获取key和value-->
<li v-for="(value,key) in info">{{key}}-{{value}}</li>
<!--3.获取key和value和index-->
<li v-for="(value,key,index) in info">{{key}}-{{value}}-{{index}}</li>

<script>
    const app=new Vue({
      el:'#app',
      data:{
         info:{
           name:'why',
           age:18,
           height:1.88
         }
      }
    });
</script>
```

##### 7.3.v-for使用过程添加key

+ key要保证跟展示的东西一一对应,唯一性,在中间插入元素就不用位移位移
+ 使用v-for,给对应的元素或组件添加上一个:key属性  ，与虚拟dom有关,更好的复用.达到性能利用
+ 主要作用:为了高效更新虚拟DOM

```	html
<li v-for="item in letters" :key="item">{{item}}</li>
```

##### 7.4.数组哪些方法时响应式的   要数组.下面这些方法

+ push('添加元素','添加元素'…)----在数组最后面面添加元素
+ pop()---删掉数组中的最后一个元素
+ shift()--删掉数组中的第一一个元素
+ unshift('添加元素','添加元素'…)--在数组最前面添加元素
+ splice(start,deleteCount,...插入/追加的元素item)----删除/插入/替换
  + 删除元素:第二个参数传入你要删除几个元素,没传删除后面所有元素
  + 替换元素:第二个参数,表示我们要替换几个元素,后面是用于替换前面的元素
  + 插入元素:第二个参数是0,并且后面跟上要插入的元素

+ sort()--排序,可以传入函数作为参数

  ```js
  //降序
  arr.sort(function(a,b){
  	return b - a;
  })
  //升序
  arr.sort(function(a,b){
  	return a - b;
  })
  ```

+ reverse()------反转

+ ##### 注意:通过索引值修改数组中的元素 -------无响应式

  ```js
  //letters:['a','b','c','d']
  this.letters[0]="bbb"; 
  console.log(this.letters)//["bbb", "b", "c", "d"],但页面的值没变
  //  要用:this.letters.splice(0,1,'bbb')------------推荐
  //  或用:Vue.set(要修改的对象,索引值,修改后的值);
  ```

##### 7.5.小案例：实现点哪个li，哪个变红

```html
<li v-for="(item,index) in movies" :class="{active:index==currentIndex}" @click="liClick(index)">{{item}}</li>
<script>
    const app=new Vue({
      el:'#app',
      data:{
        movies:['111','222','333','444'],
        currentIndex:0
      },
      methods:{
        liClick(index){
          this.currentIndex=index;
        }
      }
    });
</script>
```

### 八.书籍案例

### 九. v-model的使用

##### 9.1.v-model的基本使用

+ v-model=>v-bind:value  v-on:input

##### 9.2.v-model和radio/checkbox/select

##### 9.3.修饰符

+ lazy
+ number
+ trim

### 十.组件化开发

##### 10.1.认识组件化

##### 10.2.组件的基本使用

##### 10.3.全局组件和局部组件

##### 10.4. 父组件和子组件

##### 10.5.注册的语法糖

##### 10.6. 模板的分类写法

+ script
+ template

##### 10.7. 数据的存放

+ 子组件不能之间访问父组件
+ 子组件中有自己的data，而且必须是个函数
+ 为什么必须是一个函数

##### 10.8.父子组件的通信

+ 父传子：props
+ 子传父：$emit

##### 10.9.项目

+ npm inatall
+ npm run serve

##### 10.10.父子组件的访问

+ children/refs
+ parent/root

##### 10.11.slot的使用

+ 基本使用
+ 具名插槽
+ 编译作用域
+ 作用域插槽

### 十一.前端模块化

##### 11.1.为什么要使用模块化

+ 简单写js代码带来的问题
+ 闭包引起代码不可复用
+ 自己实现了简单的模块化
+ AMD/CMD/CommonJS

##### 11.2.ES6中模块化的使用

+ export
+ import

### 十二.webpack

##### 12.1.什么是webpack

+ webpack和gulp对比
+ webpack依赖环境
+ 安装webpack

##### 12.2.webpack的起步

+ webpack命令
+ webpack配置：webpack.config.js/package.json(scripts)

##### 12.3.webpack的loader

+ css-loader/style-loader
+ less-loader/less
+ url-loader/file-loader
+ babel-loader

##### 12.4.webpack中配置Vue

+ vue-loader

##### 12.5.webpack的plugin

##### 12.6.搭建本地服务器

+ webpack-dev-server

##### 12.7.配置文件的分离

### 十三.Vue CLI

##### 13.1.什么是CLI

+ 脚手架是什么东西

  ![](images\什么是VueCLI.png)

+ CLI依赖webpack，node，npm

  ![](images\VueCLI使用前提node.png)

  ![](images\VueCLI使用前提webpack.png)

+ 安装CLI3->拉取CLI2模块

  ![](images\VueCLI的使用.png)

  ![](images\拉取CLI2模块.png)

##### 13.2.CLI2初始化项目的过程

##### 13.3.CLI2产生的目录结构的解析

![](images\VueCLI2目录结构详解.png)

