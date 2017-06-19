 ## 1.Sum All Numbers in a Range
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。最小的数字并非总在最前面。
 ```javascript
function sumAll(arr) {
  var a=Math.max(arr[0],arr[1]);
  var b=Math.min(arr[0],arr[1]);
 var sum =0 ;
 for(var i=b; i<=a;i++){
Sum +=i;
}
     return sum;
}
sumAll([1, 4]);
```
## 2.Diff Two Arrays
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
 ```javascript
function diff(arr1, arr2) {
  var newArr=[], temp=[];
  temp=arr1.concat(arr2);
  for(var i=0;i<temp.length;i++){
    if(arr1.indexOf(temp[i]) == -1 ||arr2.indexOf(temp[i]) == -1){
        newArr.push(temp[i]);
    }
  }

  return newArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```
## 3.Roman Numeral Converter
将给定的数字转换成罗马数字
 ```javascript
function convert(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  var str = '';
  nums.forEach(function(item,index,array){
    while(num >= item){
      str += romans[index];
      num -= item;
    }
  });
 return str;
}
convert(36);
//方法2：
function convert(num) { 
  var arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  var res = '';
  for(var i = 0; i < arab.length; i++) {
    if(num >= arab[i]) {
      res += roman[i];
      num = num - arab[i];
      if(num >= arab[i]) {
        i = i - 1;
      }
    }
  }
  return res;
}
convert(2000);
```
## 4.Where art thou
写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。
 ```javascript
function where(collection, source) {
  var arr = [],arr1=[],arr2=[];
  arr=Object.keys(source);
  for(var i=0;i<collection.length;i++){
    arr1=collection[i];
     var temp=0; 
    for(var j=0;j<arr.length;j++){
      if(arr1.hasOwnProperty(arr[j]) && arr1[arr[j]]==source[arr[j]] ){
            temp++;
          }
        }
    if(temp==arr.length){
     arr2.push(arr1);
    }
      }
  // What's in a name?
  return arr2;
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//法一：
function where(collection, source) {
  var keys =  Object.keys(source);
  return collection.filter(function(obj){
      return keys.every(function(item){
          return obj.hasOwnProperty(item) && obj[item] === source[item];
      });
  });
}
//法二：
function where(collection, source) {
  var arr = [];
  var key = Object.keys(source);
  arr = collection.filter(function(x) {
    for(var i = 0; i < key.length; i++) {
      if( !x.hasOwnProperty(key[i]) || x[key[i]] !== source[key[i]] ) {
        return false;
      }
    }
    return true;
  });
  return arr;
}
```
## 5.Search and Replace
使用给定的参数对句子执行一次查找和替换，然后返回新句子。第一个参数是将要对其执行查找和替换的句子。第二个参数是将被替换掉的单词（替换前的单词）。第三个参数用于替换第二个参数（替换后的单词）。注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 ```javascript
function myReplace(str, before, after) {
  for(var i=0;i<before.length;i++){
// if( before[0].charCodeAt() >=65 && before[0].charCodeAt() <= 90 )
    if(before.charAt(i) >='A' && before.charAt(i) <='Z'){
        after= after.replace(after.charAt(i),after.charAt(i).toUpperCase());
    }
  }
  str = str.replace(before,after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

//方法1
function myReplace(str, before, after) {
    if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1);
    }
    str = str.replace(before,after);
    return str;
}
//方法2
function myReplace(str, before, after) {
  var re = /^[A-Z]/;
  if(re.test(before.charAt(0))){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before,after);
  return str;
}
```
## 6.Pig Latin
把指定的字符串翻译成 pig latin。
Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 ```javascript
function translate(str) {
  
  if(str.charAt(0) =='a'||str.charAt(0) =='e'||str.charAt(0) =='i'||str.charAt(0) =='o'||str.charAt(0) =='u'){
    str=str+'way';
  }
  else{
    var i,temp=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i) =='o'||str.charAt(i) =='u'){
         temp=i;
          break;
      }   
     }
    str=str.substr(temp)+str.substr(0,temp)+'ay';
  }
   return str;
}
translate("consonant");

//方法2：
function translate(str) {
    var myStr = '';
    var regex = /[aeiou]/gi;
    if(str[0].match(regex)){
        myStr = str + 'way';
    }else{
        var index = str.indexOf(str.match(regex)[0]);
        myStr = str.substr(index) + str.substring(0,index) + 'ay';
    }
  return myStr;
}

translate("consonant");//onsonantcay
```
## 7.DNA Pairing
DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。在每一个数组中将给定的字母作为第一个碱基返回。例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
 ```javascript
function pair(str) {
  var arr=[],arr1=[];
  for(i=0;i<str.length;i++){
    switch(str[i]){
        case 'A': arr[i]=['A','T'];
        break;
        case 'T': arr[i]=['T','A'];
        break;
        case 'G': arr[i]=['G','C'];
        break;
        case 'C': arr[i]=['C','G'];
        break;
    }
    arr1[i]=arr[i];
  }
  return arr1;
}
pair("GCG");

//方法2：
function pair(str) {
  var arr = str.split('');
  var pair = '';
  return arr.map(function(item){
      switch(item){
          case 'C':
            pair = 'G';
            break;
          case 'G':
            pair = 'C';
            break;
        case 'A':
            pair = 'T';
            break;
        case 'T':
            pair = 'A';
             break;
      }
      return [item,pair];
  });
}
pair("GCG");
```
## 8.Missing letters
从传递进来的字母序列中找到缺失的字母并返回它。如果所有字母都在序列中，返回 undefined。
 ```javascript
function fearNotLetter(str) {
  for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i+1)-str.charCodeAt(i)  > 1){
        return String.fromCharCode(str.charCodeAt(i)+1);
     }
  }
}  

fearNotLetter("abce");
```
## 9.Boo who
检查一个值是否是基本布尔类型，并返回 true 或 false。基本布尔类型即 true 和 false。
 ```javascript
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
 return typeof bool === 'boolean'; 
}
boo(null);
```
## 10.Sorted Union
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。例如：unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]。
```javascript
function unite(arr1, arr2, arr3) {
  
   Array.prototype.contains = function (element) { 
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
  }
  var sum = []; 
  for(var i=0;i<arguments.length;i++){
    for(var j=0;j<arguments[i].length;j++){      
       var temp=arguments[i][j];  
        if(!sum.contains(temp)){
          sum.push(temp);
        }
        
      }
  }
  return sum;
}
//方法1：
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
function uniteUnique(arr1, arr2, arr3) {
   var newArray=[];
   var allArray=Array.prototype.concat.apply([], arguments);
   for(var i=0;i<allArray.length;i++){
      if(newArray.indexOf(allArray[i])===-1){
         newArray.push(allArray[i]);
      }
   }
   return newArray;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//方法2：
function unite(arr1, arr2, arr3) {
  var args = Array.from(arguments);
  var arr = args.reduce(function(prev,cur){
    return prev.concat(cur);
  });
  return arr.filter(function(item,index,arr){
    return arr.indexOf(item) === index;  
  });
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
## 11.Convert HTML Entities
将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
```javascript
function convert(str) {
  // &colon;&rpar;
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}
convert("Dolce & Gabbana");

//方法2：
function convert(str) {
  // &colon;&rpar;
  var list={
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "\'":"&apos;"   
  };
  for(var key in list){
    str=str.replace(new RegExp(key,"g"),list[key]);
  }
  return str;
}
convert("Dolce & Gabbana");
```
## 12.Spinal Tap Case
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  if(str.indexOf('_')== -1 && str.indexOf(' ')== -1){
     var arr=str.split('');
     for(var i=0;i<arr.length;i++){
        if(arr[i].charCodeAt() >= '65'&& arr[i].charCodeAt() <= '90'){
           arr[i] = ' ' +arr[i];
        }
     }
    str=arr.join('');
  }
 str = str.trim().toLowerCase().replace(/\s|_/g,'-');
 return str;
}
spinalCase('thisIsSpinalTap');
//方法一：
function spinalCase(str) {
  str=str.replace(/_/g," ");
  var arr=str.split(" ");
  if( arr.length==1 ){
    str=str.replace(/([A-Z])/g," $1");
  } 
  str=str.trim().toLowerCase().replace(/[\s]/g,"-");
  return str;
}
spinalCase('thisIsSpinalTap');

```
## 13.Sum All Odd Fibonacci Numbers
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
```javascript
function sumFibs(num) { 
  var ca = [1,1],sum=0,arr=[]; 
  
  if (num >= ca.length) { 
      for (var i = ca.length; i < num ; i++ ) { 
          ca[i] = ca[i - 2] + ca[i - 1]; 
      } 
  } 
   arr=ca.filter(function(val){
     return val%2 ==1 && val<=num;
   });
 sum = arr.reduce(function(pre,next){
    return pre+next;
  });
  
  return sum;
} 

sumFibs(4);
```
## 14.Sum All Primes
求小于等于给定数值的质数之和。
```javascript
function sumPrimes(num) {
  var arr=[];
  for(var k=2; k<=num;k++){
    var flag=1;
     for(var i=2;i<k;i++){
      if(k % i == 0){
          flag=0;
         break;
      }
    } 
    if(flag == 1){
      arr.push(k);  
      }
  }
  num= arr.reduce(function(a,b){
    return a+b;
  });
  
  return num;
}
sumPrimes(10);
//方法2：将 2 到给定值之间的所有整数加起来，然后在这期间判断一下，如果 “ 不是质数 ” ，就将这个数减掉即可。
function sumPrimes(num) {
  var sum = 0;
  var i=2; 
  while(i<=num) {
    for(var j=2; j<i; j++) {
      if(i % j === 0) {
        sum -= i;
        break;
      }
    }
    sum += i;
    i++;
  }
  return sum;
}
sumPrimes(14);
```
## 15.Smallest Common Multiple 
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
```javascript
function smallestCommons(arr) {
  var min = Math.min(arr[0],arr[1]); 
  var max = Math.max(arr[0],arr[1]);
  var arr1=[],arrgbs=min;
 for(var k=min;k<=max;k++){
    arrgbs= gbs(arrgbs,k);
 }
  return  arrgbs;
}
/*两个数的最小公倍数函数*/
function gbs(a,b){
  var count;
  if(a === 0){
           return b;
    }
   for(var i=1;i<=b;i++)
    {
        count=a*i;
        if(count % b ===0)
        {
        return count;
        }
    } 
}
smallestCommons([1,5]);

```
## 16.Finders Keepers
写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
```javascript
function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

```
## 17.Drop it
让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
```javascript
function drop(arr, func) {
  // Drop them elements.
    var len=arr.length;
    for(var i=0;i<len;i++){
    var temp=func(arr[0]);
    if(temp){
      return arr;
    }else{
      arr= arr.slice(1);
    } 
  }
   return arr;
}
drop([1, 2, 3], function(n) {return n < 3; });
//方法2：将数组参数放入函数中检测，并将第一个满足条件的元素之前的所有元素删除,先用 filter() 方法取得满足条件的元素数组的第一个 firstTrue ，然后用 firstTrue 与原数组的第一个元素比较，不相等便删除，直到 firstTrue 变为数组的第一个元素。
function drop(arr, func) {
  var firstTrue = arr.filter(func)[0];
  
  while(firstTrue !== arr[0]) {
    arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
```
## 18.Steamroller
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
```javascript
function steamroller(arr) {
  // I'm a steamroller, baby
   var arr1=[];
   for(var i=0;i<arr.length;i++){   
      if(Array.isArray(arr[i])){
        var temp = steamroller(arr[i]);
        arr1= arr1.concat(temp);
        }
      else{
        arr1.push(arr[i]);
      } 
    }
  return arr1;
}  

}
steamroller([1, [2], [3, [[4]]]]);

```
## 19.Binary Agents
传入二进制字符串，翻译成英语句子并返回。
```javascript
function binaryAgent(str) {
  var arr=str.split(' ');
 // for(var i in arr){  
  for(var i=0;i<arr.length;i++){
   arr[i] = String.fromCharCode( parseInt(arr[i],2) );  
  }
  str=arr.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

```
## 20.Everything Be True
完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
```javascript
function every(collection, pre) {
  // Is everyone being true?
  //  return  collection.every(function(x){ return x[pre]; });
  pre = collection.every(function(x){
    return x.hasOwnProperty(pre) && Boolean(x[pre]);
  });
  return pre;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```
## 21.Arguments Optional
创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
```javascript
function add() {
  //typeof 返回对象的类型(总共有5种类型：null、number、string、boolean、undefined)
  //arguments[i]返回函数add中传入的dii个参数
  if(typeof arguments[0]=="number" && typeof arguments[1]=="number"){
    return arguments[0]+arguments[1];
  }
  else if(arguments.length==1 && typeof arguments[0]=="number"){
    var x=arguments[0];
    //如果只有一个数字型参数x，返回x和后面捕捉到的任意一个数字型参数y之和
    return function(y){
      if(typeof y =="number"){
        return x+y;
      }
    };
  }
}
add(2,3);
```
FCC中级算法题(完)
