import initStore from "./redux/createStore";

// eslint-disable-next-line no-underscore-dangle
export const store = initStore(window.__PRELOADED_STATE__);
