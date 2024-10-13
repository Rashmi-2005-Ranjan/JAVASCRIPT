//let marks = [87, 85, 67, 89, 94, 99, 78];
/*
console.log(marks)
console.log(marks.length)
console.log(typeof marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7]) 
*/

/*
console.log("Using for  Loop")
console.log("for Loop Used To Print Elements Of Array")
for(let indx=0;indx<marks.length;indx++){
    console.log(marks[indx])
}

console.log("Using for of Loop")
console.log("for of Loop Used To Print Elements Of Array")
for(let element of marks){
    console.log(element)
}

let cities=["Bhubaneswar","Cuttack","Gangam","Baripada","Balasore","Bhadrak","Paradeep","Rourkela"]
console.log("Using for of Loop")
console.log("for of Loop Used To Print Elements Of Array")
for(let city of cities){
    console.log(city.toUpperCase())
    
}
for(let city of cities){
    console.log(city.toLowerCase())    
}

console.log("Using for in Loop")
console.log("for in Loop Used To Print Indices Of Array")
for(let index in marks){
    console.log(index)
}
    */

/*
console.log("Finding Average Of Array Elements")
let marksOfWholeStudent=[85,64,97,91,94,88,75]
console.log("The Length Of Array is : ",marksOfWholeStudent.length)
sum=0
for(let i=0;i<marksOfWholeStudent.length;i++){
    console.log("Before Iteration : ",sum)
    sum+=marksOfWholeStudent[i]
    console.log("After Itrration : ",sum)
}
console.log("The Sum Of Marks Of Whole Class is : ",sum)

let average=sum/marksOfWholeStudent.length
console.log("The Average Of Whole Class Marks is : ",average)
*/
/*
let sum = 0;
let marksOfWholeStudent = [85, 64, 97, 91, 94, 88, 75];
for (let element of marksOfWholeStudent) {
  sum += element;
}
let average=sum/marksOfWholeStudent.length
console.log("The Average is : ",average)
*/

/*
let newprice
let items=[250,645,300,900,50]
for(let price of items){
    console.log(`The Old Price Of The Items is ${price} `)
    newprice=price-(price/10)
    console.log(`The New Price Of  Items After 10% Discount is ${newprice} `)
    
}
*/

/*
console.log("Push Method in Array")
let Vehicle=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
console.log("The Original Array is : ",Vehicle)
Vehicle.push("Punch.ev","Baleno","Lambo","Chevrelot")
console.log("The Array After Pushing New Element is : ",Vehicle)
*/
/*
console.log("Pop Method in Array")
let Vehicle=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
console.log("The Original Array is : ",Vehicle)
Vehicle.pop()
Vehicle.pop("Rangerover")
console.log("The Array After Pop  : ",Vehicle)
*/
/*
console.log("Concat Method in Array")
let Cars=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
let Bykes=["Hero","Honda","Bajaj","Kawasaki"]
let newarr=Cars.concat(Bykes)
console.log(newarr)
*/

/*
console.log("unShift Method in Array")
let Cars=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
Cars.unshift("Hero","Honda","Mahindra","Thar")
console.log(Cars)
*/
/*
console.log("shift Method in Array")
let Cars=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
Cars.shift()
console.log(Cars)
*/

/*
console.log("slice Method in Array")
let Cars=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
console.log("Original Array : ",Cars)
let updatedarray=Cars.slice(0,3)
console.log("Sliced Array : ",updatedarray)
*/

/*
console.log("splice Method in Array")
let Cars=["Maruti Suzuki","Toyota","Rangerover","Bmw","Audi","Tata","Hundai","Roles"]
console.log("Old Array : ",Cars)
Cars.splice(3,3,"Bajaj","KTM","Mahindra")
console.log("Spliced Array : ",Cars)
*/

console.log("Practice Question")
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log("Old Array : ",companies)
companies.shift()
console.log("First Updated Array : ",companies)
companies.splice(1,1,"Ola")
console.log("Second Updated Array : ",companies)
companies.push("Amazon")
console.log("Third Updated Array : ",companies)
