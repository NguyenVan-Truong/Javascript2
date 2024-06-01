//7.1
// const Car = function(make, speed){
//     this.make = make;
//     this.speed=speed;
// };

// Car.prototype.accelerate=function(){
//     this.speed += 10;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();


// //7.2
// class CarCl { 
//     constructor(make, speed){
//     this.make = make;
//     this.speed=speed;
// }
// accelerate(){
//     this.speed += 10;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// }

// brake(){
//     this.speed -= 5;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// }

// get speedUS(){
//     return this.speed/1.6;
// }

// set speedUS(speed){
//     this.speed=speed * 1.6;
// }
// }
// const ford = new CarCl('Ford',120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// //7.3
// const Car = function(make, speed){
//     this.make = make;
//     this.speed=speed;
// };

// Car.prototype.accelerate=function(){
//     this.speed += 10;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make}is going at ${this.speed}km/h`);
// };

// const EV = function(make, speed,charge){
//     Car.call(this, make, speed);
//     this.charge=charge;
// }

// EV.prototype=Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// }
// EV.prototype.accelerate = function(){
//     this.speed +=20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed}km/h,with a charge of ${this.charge}`);
// }

// const tesla = new EV('Tesla',120,23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// 7.4
// class Account{
//     constructor(owner,currency,pin){
//         this.owner=owner;
//         this.currency=currency;
//         this.pin=pin;
//         this.movements=[];
//         this.locale=navigator.language;

//         console.log(`Thanks for opening an account,${owner}`);

//     }

//     deposit(val){
//         this.movements.push(val);

//     }
//     withdraw(val){
//         this.deposit(-val)
//     }
//     approveLoan(val){
//         return true
//     }
//     requestLoan(val){
//         if(this.approveLoan(val)){
//             this.deposit(val);
//             console.log(`loan approved`);
//         }
//     }
// }

// const acc1 = new Account('jonas','EUR',1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000)
// acc1.approveLoan(1000)
// console.log(acc1)
// console.log(acc1.pin)

class CarCl { 
        constructor(make, speed){
        this.make = make;
        this.speed=speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make}is going at ${this.speed}km/h`);
    }
    
    brake(){
        this.speed -= 5;
        console.log(`${this.make}is going at ${this.speed}km/h`);
        return this;
    }
    
    get speedUS(){
        return this.speed/1.6;
    }
    
    set speedUS(speed){
        this.speed=speed * 1.6;
    }
    }

    class EVCl extends CarCl{
        #charge
        constructor (make, speed,charge){
            super(this, make, speed);
            this.#charge=charge;
        }
        
    
chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
}
        accelerate() {
            this.speed +=20;
            this.#charge--;
            console.log(`${this.make} is going at ${this.speed}km/h,with a charge of ${this.#charge}`);
            return this;
        }
    }
    
const rivian = new EVCl('Rivian', 120,23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();
console.log(rivian.speedUS);
    