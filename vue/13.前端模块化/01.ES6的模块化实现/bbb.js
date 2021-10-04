//从aaa.js中导入属性
import {name, age, sum} from "./aaa.js"

import {addr, hanshuming, Person} from "./aaa.js"

console.log(name);
console.log(age);

console.log(sum(1, 2));


console.log(addr);
hanshuming(1,2);

// 使用导入的类, 使用new关键字实例化对象
const p = new Person();
p.run();

// 导入使用export default导出的属性
// add为自己命名的变量名
import add from "./aaa.js"

console.log(add);


// 可以使用* 来导入所有被导出的内容
// aaa为自定义的名称,是一个对象
import * as aaa from "./aaa.js"
//要读取内容,则用属性访问的方式
console.log(aaa.name);w