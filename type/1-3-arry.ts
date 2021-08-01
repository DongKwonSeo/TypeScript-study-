{
  // Arry
  const fruits: string[] = ["사과", "수박"];
  const scroes: Array<number> = [1, 3, 4];

  function show(fruits: readonly string[]) {}

  //   function show2(fruits: readonly Array<number>) {}

  //   readonly 아직 사용 할수없다 ,

  //Tuple
  let student: [string, number];
  student = ["name", 123];
  student[0] //name 출력
  student[1] //123
//   가독성이 좋지 않아서 다른 문법을 사용하는것이 효율적이다
}
