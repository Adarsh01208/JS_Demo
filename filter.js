const num =[12,45,45,23,12,4,9,17,27,38,];

const result= num.filter(val => val<40);
console.log(result);
console.log(result.sort());
//decreasing order
console.log(num.sort(function(a,b ) {return b-a}));

// increasing orderfruits.push('mango');
console.log(num.sort(function(a,b ) {return a-b}));

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const res=fruits.filter(val=> val.length>5);
console.log(res)

// map funtion
const number =[2,4,6,8,10,12];
const double = number.map(val => {return val*val} )
console.log(double)

// //reducer
// const  num2=[1,2,3,4,5];
// const reducer= (previousValue , currentValue) => previousValue + currentValue;
// console.log(num2.reduce(reducer));

//closure

function outerFunction()
{
  //let a=5;
  function innerFun()
  {
    console.log(a);
  }
  var a=5;
  return innerFun;
}
var closeure= outerFunction();
closeure();


//settimeout demo

const timeout = setTimeout(() => {
     console.log("hello")
}, 3000);

const  num2 =[1,2,3,4,5]
const reducer=(previousValue , currentValue) => 
  previousValue+ currentValue
  const sum = num2.reduce(reducer);
  console.log(sum)