{
  // Enum 여러 가지 값을 상수 값으로 정리 할수 있도록 도와주는 Type

  //JavaScript
  const MAX_NUM = 7;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ Moday: 0, Tuesday: 1 });
  const dayOfToday = DAYS_ENUM.Moday;

  //   TypeScript
  //   from 0 시작한다
  // 숫자 할당도 가능하다 ,하지만 전부다 문자를 입력해줘야한다
  enum Days {
    Monday,
    Tuesday,
    wednesday,
    Thursday,
  }
  console.log(Days.Monday);
  const day = Days.wednesday;
  //   타입 스크립트에서 EUNM 가능하면 사용하지 않는 것이 좋다
  //   그 이유는  할당한 변수에 다시 할당 할수 있다
  // ex)  const day = Days.wednesday;
  //            day= 10 ;
  // 이러한 문제점 떄문에 Type 정확히 보장 되지 않는다
  type DaysOfWeek = "Monday" | "Tuesday" | "wednesday";
  let dayofWeek: DaysOfWeek = "Monday";
  dayofWeek = "Tuesday";

//   해결 방법 Union type 추천 한다 
//   
}
