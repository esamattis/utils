import {get} from "../src/get";

test("simple", () => {
    expect(get({foo: 1}, o => o.foo)).toEqual(1);
});
