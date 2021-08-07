const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());

const arry = [];
console.log(arry);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member leval
  this.makeCoffee = (shots) => {
    console.log("makeing ....");
  };
}
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("makeing...");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LattMachine(milk) {
  this.milk = milk;
}
LattMachine.prototype = Object.create(CoffeeMachine.prototype);

const lattMachine = new LattMachine(123);
console.log(lattMachine);
lattMachine.makeCoffee();
