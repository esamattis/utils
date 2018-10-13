import {omit} from "../src/omit";

const o1 = {foo: 1, bar: 2};

const o2 = omit(o1, ["bar"]);

// $ExpectError
o2.bar;
