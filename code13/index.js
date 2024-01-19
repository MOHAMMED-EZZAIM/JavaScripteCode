// // object :  object={Key : value}
// const persone1={
//     firstname:"mohammed ",
//     lastname:"ezzaim",
//     age:21,
//     isEmployedFuter:true,
//     sayeHello:function(){  console.log(`hello ${this.firstname} ${this.lastname}`)},
// }
// const persone2={
//     firstname:"lina ",
//     lastname:"zare",
//     age:2,
//     isEmployedFuter:false,
//     sayeHello:() =>{  console.log(`hello lina`)},
// }
 
// console.log(persone1.firstname);
// console.log(persone1.lastname);
// console.log(persone1.age);
// console.log(persone1.isEmployedFuter);
// persone1.sayeHello();

// console.log(persone2.firstname);
// console.log(persone2.lastname);
// console.log(persone2.age);
// console.log(persone2.isEmployedFuter);
// persone2.sayeHello();


// //class

// class Producr{
//     constructor(name,price){
//             this.name=name;
//             this.price=price;
//     }
//     displayProduct(){
//         console.log(`producte :${this.name}`);
//         console.log(`Price :${this.price.toFixed(2)}$`);
//     }
//     calculTotal(tax){
//         return this.price+(this.price*tax);
//     }
// }

// const p1=new Producr("Shirt",19);
// const p2=new Producr("Pants",100.99);

// p1.displayProduct();
// console.log(p1.calculTotal(30)+"$");
// p2.displayProduct();


// //static

// class User{
//      static  com=0;
//     constructor(username){
//             this.username=username;
//             User.com+=1;
//     }
//     syHello(){
//         console.log(`may user is : ${this.username}`);
//     }
//        static getUserCount(){
//             console.log(`get user Count :${User.com}`);
//     }
// }

// const u1=new User("mohammed");
// u1.syHello();
// User.getUserCount();
// const u2=new User("lina");

// console.log(u1.com);//undefined
// console.log(User.com);// correct

// //heritages

// class Animal{
//     alive=true;
//     eat(){
//         console.log(`your name is :${this.name}`);
//     }
//     slipe(){
//         console.log(`your name is :${this.name} slipe`);
//     }

// }
// class Rabbit extends Animal{
//    name="rabbit";
// }
// class Fish extends Animal{
//     name="fish";
//  }

//  class Mawk extends Animal{
//     name="Mawk";
//  }

//     const o1=new Rabbit();
//     const o2=new Fish();
//     const o3=new Mawk();
//     o1.slipe();
//     o2.eat();
//     o3.eat();


// //super

// class Anima{
//    constructor(name,age){
//     this.name=name;
//     this.age=age;
//    }
//     dispalay() {
//     console.log(`name :${this.name}  , age:${this.age}`);
//    }

// }
// class newRabbit extends Anima{
//     constructor(name,age,runsped){
//         super(name,age);
//         this.runsped=runsped;
//   }
//   dispalay() {
//     super.dispalay();
//     console.log(`name :${this.runsped}`);
//    }
// }
// class newFish extends Anima{
//     constructor( name,age,swimspped){
//         super(name,age);
//         this.swimspped=swimspped;
//   }
//  }

//  class newMawk extends Anima{
//     constructor(name,age,moha){
//         super(name,age);
//         this.moha=moha;
//   }
//  }

// const obj1=new newRabbit("mohammed",21,"verry fast");
// obj1.name="latifa";
// obj1.age=65;
// obj1.dispalay();


// // getter and setter

// class Rectangle{
//     constructor(width,heigth){
//             this.width=width;
//             this.heigth=heigth;
//     }
//     set width(newWidth){
//             if(newWidth>0){
//                 this._width=newWidth;
//             }
//             else{
//                 console.error("le width cannot be negative");
//             }
//     }
//     set heigth(newHeigth){
//         if(newHeigth>0){
//             this._heigth=newHeigth;
//         }
//         else{
//             console.error("le heigth cannot be negative");
//         }
// }

// get width(){
//     return `${this._width.toFixed(1)}cm`;
// }
// get heigth(){
//     return `${this._heigth.toFixed(1)}cm`;
// }
//     get area(){
//     console.log(`${this.width}+${this.heigth}`);
// }
// }
// const r1=new Rectangle(2020202,2002);
// console.log(r1.width);
// console.log(r1.heigth);
// r1.width=4;
// r1.heigth=5;
// console.log(r1.width);
// console.log(r1.heigth);

// r1.width=-4;
// r1.heigth=-5;
// console.log(r1.width);
// console.log(r1.heigth);

// console.log(r1.area);


class person{
    constructor(firstanem,lastname,age){
        this.firstanem=firstanem;
        this.lastname=lastname;
        this.age=age;
    }
    set firstanem(newFirstname){
        if(typeof(newFirstname)==="string" && newFirstname.length>0){
                this._firstanem=newFirstname;
        }
        else{
            console.error("firsname indefined ");
        }
    }
    set lastname(newlaststname){
        if(typeof(newlaststname)==="string" && newlaststname.length>0){
                this._lastname=newlaststname;
        }
        else{
            console.error("lastname indefined ");
        }
    }
    set age(newAge){
        if(typeof(newAge)==="number" && newAge>0){
                this._age=newAge;
        }
        else{
            console.error("age indefined ");
        }
    }
    get firstanem(){
        return this._firstanem;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this.firstanem +" ,"+this.lastname+" ,"+this.age;
    }
}


 const p1=new person("mohammed","ezzaim",21);
 console.log(p1.firstanem);
 console.log(p1.lastname);
 console.log(p1.age);
 console.log(p1.fullName);
