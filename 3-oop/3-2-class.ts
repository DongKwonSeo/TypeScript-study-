{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffBeans: number = 0;

    constructor(coffBeans: number) {
      this.coffBeans = coffBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough");
      }
      this.coffBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const Maker = new CoffeeMaker();
}
