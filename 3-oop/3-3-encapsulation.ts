{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public:기본적인 속성
  //private:외부에서 접근 불가
  //protected :클래스를 상속한 자식 요소에서만 사용가능(외부에서는 접근할수 없다)

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffBeans: number = 0; // instance (object) level

    private constructor(coffBeans: number) {
      this.coffBeans = coffBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffBeans += beans;
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
  const maker = CoffeeMaker.makeMachine(32);
  //   maker.fillCoffeeBeans
}
