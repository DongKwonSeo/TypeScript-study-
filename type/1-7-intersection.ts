{
  // Intersection Types : &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }
  internWork({
    name: "dk",
    score: 2,
    empolyeeId: 232,
    work: () => {},
  });
}
