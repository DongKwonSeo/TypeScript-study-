type Chexk<T> = T extends string ? boolean : number;
type Type = Chexk<string>; // boolean

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undifined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>;
("string");
type T1 = TypeName<"a">;
type T2 = TypeName<() => void>;
