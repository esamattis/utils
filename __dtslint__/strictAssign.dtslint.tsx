import {strictAssign} from "../src/strictAssign";

strictAssign({}, {});

strictAssign({foo: 1}, {foo: 2});
strictAssign({foo: 1}, {foo: 2}, {foo: 4});
strictAssign({foo: 1}, undefined, {foo: 2}, null, {foo: 4}, null);

// $ExpectError
strictAssign({foo: 1}, {foo: "sdf"});

// $ExpectError
const ret = strictAssign({foo: 1}, {bar: 2});

// $ExpectError
strictAssign({foo: 1}, {foo: 2}, {bar: 4});
