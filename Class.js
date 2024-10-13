/*
class ToyotaCar{
    constructor(brand,millage){
        console.log("Ceating New Object");
        this.brand=brand;
        this.millage=millage;
    }
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }

}

let Fortuner = new ToyotaCar("Fortuner",10);
console.log(Fortuner)
let lexus = new ToyotaCar("Lexus",12);
console.log(lexus)
*/

/*
class Parent{
    hello(){
        console.log("Hello");
    }
}

class child extends Parent{

}

let obj1=new child();
*/
/*
class Person{
    constructor(){
        this.species="Homosapiens";
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
    work(){
        console.log("No Working");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solving Problems");
    }
}

let rashobj=new Engineer();
*/
/*
class Person{
    constructor(name){
        console.log("Entry Parent Constructor")
        this.species="Homosapiens";
        this.name=name;
        console.log("Exit Parent Constructor")
    }
    eat(){
        console.log("Eating");
    }
    
}

class Engineer extends Person{
    constructor(branch,name){
        console.log("Entry Child Constructor")
        super(name);//To Invoke Parent Class Constructor
        this.branch=branch;
        this.name=name;
        console.log("Exit Child Constructor")
    }
    work(){
        super.eat();
        console.log("Solving Problems");
    }
}

let engobj=new Engineer("Chemical Engineer","Rashmi");
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData(){
    console.log("Data Viewed Successfully");
  }
}

class Admin extends User {
    constructor(name, email){
        super(name,email);
        this.name=name;
        this.email=email;
    } 
    editData(){
        console.log("Data Edited Successfully");
    }
}
 
let student1=new User("Rashmi","abc@gmail.com");
let student2=new User("Ranjan","def@gmail.com");
let teacher1=new User("Ramesh","ghi@gmail.com");

let admin1=new Admin("Rajesh","admin1@gmail.com")
