{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  printLoginState({ state: "loading" }); // ð loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // ð loaded
  printLoginState({ state: "fail", reason: "no network" }); // ðą no network

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("ð loading...");
        break;
      case "success":
        console.log(`ð ${state.response.body}`);
        break;
      case "fail":
        console.log(`ðą ${state.reason}`);
        break;
      default:
        throw new Error(`ėëŽėīëëĪ ${state}`);
    }
  }
}
