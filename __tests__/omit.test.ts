import {omit} from "../src/omit";

test("omit can omit", () => {
    const o1 = {foo: 1, bar: 2};
    const o2 = omit(o1, ["bar"]);

    expect(o2).toEqual({foo: 1});
});
