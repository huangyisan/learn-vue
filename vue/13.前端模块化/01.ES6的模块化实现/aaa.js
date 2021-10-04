let name = "yisan";
let age = 19;

let sum = function (num1, num2) {
  return num1 + num2
};

// 导出方式1
export {
  //将变量进行导出
  name,
  age,
  //导出函数
  sum,
}

// 导出方式2
export let addr = 'zhejiang';

export function hanshuming(num1, num2) {
  console.log(num1,num2)

}

// 导出es6定义的类,使用class
export class Person {
  run(){
    console.log('在奔跑')
  }
}


// 某些情况下,一个模块中包含某个的功能,我们并不希望给这个功能命名,而且让导入这可以自己来命名.
// 这个时候可以使用export default
// export default导出的只能一个,也且只有一个,不可以多个

const address = '北京市';
export default address