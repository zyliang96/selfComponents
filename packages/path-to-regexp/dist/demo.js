const pathToRegexp = require("./index");
let keys = [];
const reg = pathToRegexp.pathToRegexp("/name/:test(\\d*)/:attr1?{-:attr2}?{-:attr3}?/{abc}?/\\asd", keys, {
  end: false,
  strict: false,
  sensitive: false,
});
// console.log(reg)
// console.log(reg.exec('/name/123/abc-test-test/abc/\\asd'))

const compile = pathToRegexp.compile("/name/:test(\\d*)/:attr1?{-:attr2}?{-:attr3}?/{abc}?/\\asd",{validate:true})
console.log(compile({
  test:"123",
  attr1:'attr1456',
  attr2:'attr2789',
  attr3:'attr30123'
}))