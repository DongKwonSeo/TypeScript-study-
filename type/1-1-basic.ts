{
  //  JavaScript
  // Primitive: number,string, boolean, bigint, symbol, null,undefind
  // Object : function , arry ....

  // number
  const num: number = -6;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //  undefined
  let name: undefined; // bad
  let age: number | undefined;
  age = undefined;
  age = 1;

  //   null
  let person: null; // bad
  let person2: string | null;

  //  unKnown
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
  }

  // never
  function throwError(message: string) {
    //message >setver (log)
    //
  }

  //objet
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "dongkwon" });
}
