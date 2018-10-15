import Emitter from "es6-event-emitter";

let state = {};

let initialState = {
  isLoggedIn: true,
  city: {
    name: "---"
  },
  list: []
};

class Store extends Emitter {
  constructor(initialState) {
    super();

    state = initialState;
  }

  updateGlobalState(newState) {
    state = Object.assign({}, state, newState);
    this.trigger("stateChange");
  }

  getGlobalState() {
    return state;
  }

  subscribe(cb) {
    this.on("stateChange", cb);
  }

  unsubscribe(cb) {
    this.off("stateChange", cb);
  }
}

const instance = new Store(initialState);

export default instance;