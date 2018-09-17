import {strictAssign} from "../src/strictAssign";

strictAssign({}, {});

strictAssign({foo: 1}, {foo: 2});
strictAssign({foo: 1}, {foo: 2}, {foo: 4});

// $ExpectError
strictAssign({foo: 1}, {foo: "sdf"});

// $ExpectError
const ret = strictAssign({foo: 1}, {bar: 2});

// $ExpectError
strictAssign({foo: 1}, {foo: 2}, {bar: 4});
