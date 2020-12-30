const DEV_ENV = "http://10.17.222.189:8765"; // should be changed when app starts

export default window.location.hostname !== "localhost"
  ? window.location.protocol + "//" + window.location.hostname + ":8765"
  : DEV_ENV;
