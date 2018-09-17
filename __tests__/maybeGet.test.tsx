import {maybeGet} from "../src/maybeGet";

test("simple", () => {
    expect(maybeGet({foo: 1}, o => o.foo)).toBe(1);
});

test("simple with default", () => {
    expect(maybeGet({foo: 1}, 2, o => o.foo)).toBe(1);
});

test("handle missing value", () => {
    interface Ding {
        foo?: {
            bar?: number;
        };
    }

    const ding: Ding = {};

    expect(maybeGet(ding, o => o.foo.bar)).toBe(null);
});

test("handle missing value with default", () => {
    interface Ding {
        foo?: {
            bar?: number;
        };
    }

    const ding: Ding = {};

    expect(maybeGet(ding, 3, o => o.foo.bar)).toBe(3);
});

test("does not break with falsy values", () => {
    interface Ding {
        foo?: {
            num?: number;
            str?: string;
        };
    }

    const ding: Ding = {
        foo: {
            num: 0,
            str: "",
        },
    };

    expect(maybeGet(ding, 3, o => o.foo.num)).toBe(0);
    expect(maybeGet(ding, "default", o => o.foo.str)).toBe("");
});

test("can go through arrays", () => {
    interface Ding {
        arr?: ({bar?: number} | null)[];
    }

    const ding: Ding = {
        arr: [{bar: 2}, {bar: 4}],
    };

    expect(maybeGet(ding, o => o.arr[1].bar)).toBe(4);
});
