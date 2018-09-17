import {maybeGet} from "../src/maybeGet";

interface Foo {
    foo?: {
        bar?: {
            num: number;
            str: string;
        };
    };
    arr: (number | null)[];
    dong: string;
    ding: string | null;

    arrOb: ({foo?: number} | null)[];
}

declare const foo: Foo;

const res: number | null = maybeGet(foo, o => o.foo.bar.num);
const res1: string | null = maybeGet(foo, o => o.ding);
const res2: number | null = maybeGet(foo, o => o.arr[0]);
const res3: string | null = maybeGet(foo, o => o.dong);
const res4: number | null = maybeGet(foo, o => o.arrOb[0].foo);
const res8: number | null = maybeGet(foo.foo, o => o.bar.num);

maybeGet(foo, o => o.arrOb[0].foo);

const res5: number = maybeGet(foo, 1, o => o.foo.bar.num);
const res6: number | string = maybeGet(foo, "s", o => o.foo.bar.num);
