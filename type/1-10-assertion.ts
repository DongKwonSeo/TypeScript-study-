{
  // Type Assertions 좋지 않은 코드 이다
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  //   any 문자열 type 일떄 만 사용가능한 length
  //   사용 할수 있을떄
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 사용 x

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const number = findNumbers();
  number.push(3); ////

  const button = document.querySelector("class")!;
}
