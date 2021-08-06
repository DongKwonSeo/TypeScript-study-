{
  type Video = {
    title: string;
    author: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   descrition?: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ....in 동일하다
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: string;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "happy";

  const video: ReadOnly<Video> = {
    title: "dd",
    author: "dasd",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj4: Nullable<Video> = {
    title: null,
    author: null,
  };
}
