{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    };
    const BEANS_GRAMM_PER_SHOW: number = 7;
    let coffBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
      if (coffBeans < shots * BEANS_GRAMM_PER_SHOW) {
        throw new Error("not enough");
      }
      coffBeans -= shots * BEANS_GRAMM_PER_SHOW;
      return {
        shots,
        hasMilk: false,
      };
    }
    coffBeans += 3 * BEANS_GRAMM_PER_SHOW;
    const coffee = makeCoffee(2);
    console.log(coffee);
  }
  