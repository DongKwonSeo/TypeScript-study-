{
  const obj = {
    name: "Rudy",
  };
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // male or female

  type keys = keyof Animal; //keyof 쓰면 type 가지고 유니언 타입으로 만들어진다
  const key: keys = "name";

  
  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const heelo: Person = {
    name: "헬로",
    gender: "male",
  };
}
