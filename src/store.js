import initStore from "./redux/createStore";

export const store = initStore(window.__PRELOADED_STATE__);
