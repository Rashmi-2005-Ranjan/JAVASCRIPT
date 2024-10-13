// const student={
//     fullname : "Rashmi",
//     marks : 8.5,
//     printMarks:function(){
//         console.log(this.marks); //student.marks
//     }
// }

const employee = {
  calcTax1() {
    console.log("Tax Rate is 10% ");
  },
};

const Employee1={
    salary:7000,
    calcTax2() {
        console.log("Tax Rate is 20% ");
      },
};
const Employee2={
    salary:5000,
};
const Employee3={
    salary:5000,
};
const Employee4={
    salary:5000,
};
const Employee5={
    salary:5000,
};
const Employee6={
    salary:5000,
};
const Employee7={
    salary:5000,
};
const Employee8={
    salary:5000,
};
const Employee9={
    salary:5000,
};
const Employee10={
    salary:5000,
};

Employee1.__proto__=employee;
Employee2.__proto__=employee;
Employee3.__proto__=employee;
Employee4.__proto__=employee;
Employee5.__proto__=employee;
Employee6.__proto__=employee;
Employee7.__proto__=employee;
Employee8.__proto__=employee;
Employee9.__proto__=employee;
Employee10.__proto__=employee;