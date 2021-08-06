type PositionsType = {
  x: number;
  y: number;
};

interface PositionsInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionsType = {
  x: 1,
  y: 1,
};
const obj2: PositionsInterface = {
  x: 1,
  y: 1,
  z: 1,
};

//class
class Pos1 implements PositionsType {
  x: number;
  y: number;
}

class Pos2 implements PositionsInterface {
  x: number;
  y: number;
  z: number;
}

//Extends

interface ZPositionInterface extends PositionsInterface {
  z: number;
}
type ZPositionType = PositionsType & { z: number };

// only interface can be merged .
interface PositionsInterface {
  z: number;
}

// type PositionsType{
// 중복되는 타입 ... 선언
// }

//  Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];
type NumberType = number;
type Direction = "left " | "right";
