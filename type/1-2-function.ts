{
  //   // JavaScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TypeScript
  //   function add(num1: number, num2: number) {
  //     return num1 + num2;
  //   }

  //   // JavaScript
  //   function jaFetchNum(id) {
  //     //   ..code
  //     //   ..code
  //     //   ..code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TypeScript
  //   function fetFetchNum(id: string): Promise<number> {
  //     //   ..code
  //     //   ..code
  //     //   ..code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //JavaScript => TypeScript
  //Optional parameter
  function printName(frist: string, last?: string) {
    console.log(frist);
    console.log(last);
  }
  printName("rudy", "seo");
  printName("he");
  printName("she", undefined);
  // ?이용해서 undefined  대신해서 사용해준다

  // Default parameter
  function printMessage(message: string = "defalut") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNum(1, 2));
  console.log(addNum(1, 2, 3));
  console.log(addNum(1, 2, 3, 4));
}
