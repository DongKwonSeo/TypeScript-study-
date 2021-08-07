type Chexk<T> = T extends string ? boolean : number;
type Type = Chexk<string>;  // boolean
