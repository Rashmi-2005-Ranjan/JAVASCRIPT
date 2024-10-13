// console.log("Hello Javascript");
// console.log("Hello Rashmi Ranjan");

// name="Tony Stark";
// console.log(name);
// age=24;
// price=22.45;
// x=null;//Know What Stored in x but That is null
// y=undefined;//Not Know What Stored Inside y
// console.log(x);
// console.log(y);

// //Variables Name Are Case Sensitive
// fullname="Rashmi Ranjan";
// fullName="Rahul Saha"
// console.log(fullName);
// console.log(fullname);

//let , const , var

/*let name="Rashmi Ranjan";
var clas="B.Tech";
const age=24;

const PI=3.141;

console.log(name);
console.log(clas);
console.log(age);
console.log(PI);

let a;
var c;

console.log(a);//Undefined
//Not Working Incase Of Constant const declaration must be initialized
console.log(c);//Undefined
*/

const student={

    fullName : "Rashmi Ranjan",
    age:20,
    class:"B.Tech",
    CGPA:8.9,
    ispass:true,

};

//Two Different Way To Print The Value Inside An Object
// console.log(student.fullName);
console.log(student["fullName"]);
