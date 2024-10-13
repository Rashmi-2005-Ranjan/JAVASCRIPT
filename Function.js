// console.log("Introduction To Function in JS")

/*
console.log("-----------------")
function myFunction(){
    console.log("Hello, Everyone!");
    console.log("I am Learning Js")
}
console.log
myFunction();
console.log("-----------------") 
*/

/*
console.log("-----------------")
function myFunction(msg,n){
    console.log(msg*n)
}
console.log
myFunction(5,100);
console.log("-----------------") 
*/

/*
console.log("-----------------")
function myFunctionsum(x,y){
    console.log(x+y)
}
myFunctionsum(5,100);
console.log("-----------------") 
*/

/*
console.log("-----------------")
function myFunctionsum(x,y){
    let s=x+y
    return s
}
let ans=myFunctionsum(5,100);
console.log("The Sum is: ",ans)
console.log("-----------------") 
*/

// console.log("Introduction To Arrow Function in JS");
// console.log("-----------------");
/*
function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}
    */
/*

const sumOfNum = (a, b) => {
  return a + b;
};
console.log("The Sum Of THe Numbers is : ", sumOfNum(7, 8));
const mulOfNum = (a, b) => {
  return a * b;
};
console.log("The Sum Of THe Numbers is : ", mulOfNum(7, 8));
console.log("-----------------");
*/

/*
//Practice - 1
function returnVOwel(str) {
  let count = 0;
  for (const charcter of str) {
    console.log("The Character in String is : ", charcter);
    if (
      charcter === "a" ||
      charcter === "e" ||
      charcter === "i" ||
      charcter === "o" ||
      charcter === "u"
    ) {
      count++;
    } else if (
      charcter === "A" ||
      charcter === "E" ||
      charcter === "I" ||
      charcter === "O" ||
      charcter === "U"
    ) {
      count++;
    }

  }
  return count;

}

let ans=returnVOwel("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
console.log(ans)
*/

/*

//Using Arrow Function
const arrowFunc=(str)=>{
    let count = 0;
    for (const charcter of str) {
      console.log("The Character in String is : ", charcter);
      if (
        charcter === "a" ||
        charcter === "e" ||
        charcter === "i" ||
        charcter === "o" ||
        charcter === "u"
      ) {
        count++;
      } else if (
        charcter === "A" ||
        charcter === "E" ||
        charcter === "I" ||
        charcter === "O" ||
        charcter === "U"
      ) {
        count++;
      }
  
    }
    return count;
  
}

console.log(arrowFunc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"))
*/

/*
let arr=[1,2,3,4,5]

arr.forEach(function  printVal(val){

    console.log(val)
})
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val);
});
*/

/*
let cities = [
  "Bhubanaswar",
  "Baripada",
  "Balasore",
  "Jatani",
  "Puri",
  "Rourkela",
];

cities.forEach((city) => {
  console.log(city);
});
cities.forEach((city) => {
  console.log(city.toUpperCase());
});
cities.forEach((city) => {
  console.log(city.toLowerCase());
});
cities.forEach((city) => {
  console.log(city.toLocaleUpperCase());
});
cities.forEach((city) => {
  console.log(city.toLocaleLowerCase());
});
cities.forEach((city,index,cities) => {
  console.log(city,index,cities);
});
*/

/*
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach((num) => {
  console.log("The Square Of ", num, " is ", num * num);
});
*/

/*
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.map((val) => {
  console.log(val);
});
 */
/*
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray=number.map((val) => {
  return val
});
console.log(newArray)
*/

/*
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray=number.map((val) => {
  return val*val
});

console.log(newArray)
*/

/*
let element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 233, 6767, 4556, 87];

let newFilterArray = element.filter((values) => {
  return values % 2 === 0;
});

console.log("The Even Elements Of Arrays Are : ",newFilterArray)
*/
/*
let element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 233, 6767, 4556, 87];
let newFilterArray = element.filter((values) => {
  return values % 2 !== 0;
});

console.log("The Odd Elements Of Arrays Are : ",newFilterArray)
*/

/*
let arr = [1, 2, 3, 45, 5, 6, 7, 8, 9];

const output = arr.reduce((res, cur) => {
  return res + cur;
});

console.log("The Sum Of The Array is : ", output);
*/

/*
//Practice -2

let marks=[45,56,34,89,98,99,93,94,96,97,91]

let nintyFilter = marks.filter((val)=>{

    return val>=90

})

console.log("The 90+ Marks Are : ",nintyFilter)
*/

let n = prompt("Enter A Number : ");
let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr)

let sum=arr.reduce((prev,curr)=>{
return prev+curr
})

console.log("The Sum is : ",sum)
let product=arr.reduce((prev,curr)=>{
    return prev*curr
    })
    console.log("The Factorial is :",product)

