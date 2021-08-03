{
  // Union Type
  type Durection = "left" | "right" | "up" | "down";
  function move(direction: Durection) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in ",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log("hello");
    } else {
      console.log("wrong");
    }
  }
}
