/* 
console.log("There Are Two Way To Create A String ")
//1 St Method(Using Double coat)
let str="Java Script"

//2 nd Method(Using Single coat)
let str1="Java Script 2nd"

console.log(str)
console.log(str1)
console.log(str.length)
console.log(str1.length)
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
*/

/*
let obj={
    name:"Pen",
    price:10,
};

console.log("Without Using Templete Literals-------The Cost Of ",obj.name,"is",obj.price,"rupees")
console.log("With Using Templete Literals-------")
let output=`The Cost Of ${obj.name} is ${obj.price} rupees`
console.log(output)
*/

/*
let str="Apna\tCollege"
console.log(str.length)
*/

/*
let str="javascript"
let newstring=str.toUpperCase()
console.log("Old String : ",str)
console.log("New String : ",newstring)
*/

/*
let str="JAVASCRIPT"
 str=str.toLowerCase()
 let newstring=str.toLowerCase()
console.log("Original Content Changed of Old String : ",str)
console.log("New String : ",newstring)
*/

/*
let str="          JAVASCRIPT             "
 let newstring=str.trim()
console.log(" Old String : ",str)
console.log("New String : ",newstring)
*/

/*
let str="abcdefg"
let newstring=str.slice(1,3)
console.log(str)
console.log(newstring)
*/

/*
let str1="ab"
let str2="cd"
let newstring=str1.concat(str2)
console.log("String 1",str1)
console.log("String 2",str2)
console.log("After Concatenation : ",newstring)
*/

/*
let str="My Name Is xxxx"
let newstring=str.replace("xxxx","Rahul")
console.log("My Demo Name : ",str)
console.log("My Name Is : ",newstring)
*/

let uFname=prompt("Enter Your Full Name : ")
let uName="@"+uFname+uFname.length
console.log(uName)
/*
let len=uFname.length
let at="@"
let userName=at.concat(uFname)+len
console.log(userName)
*/