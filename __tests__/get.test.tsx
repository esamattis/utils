import {get} from "../src/get";

test("simple", () => {
    expect(get({foo: 1}, o => o.foo)).toEqual(1);
});

test("simple with default", () => {
    expect(get({foo: 1}, 2, o => o.foo)).toEqual(1);
});
