const pathToRegexp = require("./index");
let keys = [];
const reg = pathToRegexp.pathToRegexp("/name/:test(\\d*)/:attr1?{-:attr2}?{-:attr3}?/{abc}?/\\asd", keys, {
  end: false,
  strict: false,
  sensitive: false,
});