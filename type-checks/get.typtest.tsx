import {get} from "../src/get";

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

const res: number | null = get(foo, o => o.foo.bar.num);
const res1: string | null = get(foo, o => o.ding);
const res2: number | null = get(foo, o => o.arr[0]);
const res3: string | null = get(foo, o => o.dong);
const res4: number | null = get(foo, o => o.arrOb[0].foo);
const res8: number | null = get(foo.foo, o => o.bar.num);

get(foo, o => o.arrOb[0].foo);

const res5: number = get(foo, 1, o => o.foo.bar.num);
const res6: number | string = get(foo, "s", o => o.foo.bar.num);
