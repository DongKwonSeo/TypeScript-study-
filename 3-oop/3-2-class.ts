// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   class CoffeeMaker {
//      BEANS_GRAMM_PER_SHOT: number = 7;  //class level
//     coffBeans: number = 0; // instance (object) level

//     constructor(coffBeans: number) {
//       this.coffBeans = coffBeans;
//     }

//     makeCoffee(shots: number): CoffeeCup {
//       if (this.coffBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
//         throw new Error("not enough");
//       }
//       this.coffBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
//       return {
//         shots,
//         hasMilk: false,
//       };
//     }
//   }
//   const maker = new CoffeeMaker(32);
//   console.log(maker);
//   const maker2 = new CoffeeMaker(32);
//   console.log(maker2);
// }

// dddd
