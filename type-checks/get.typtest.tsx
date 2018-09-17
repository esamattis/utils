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

const res: number = get(foo, o => o.foo.bar.num);
const res1: string = get(foo, o => o.ding);
const res2: number = get(foo, o => o.arr[0]);
const res3: string = get(foo, o => o.dong);
const res4: number = get(foo, o => o.arrOb[0].foo);

// $ExpectType string
get(foo, o => o.arrOb[0].foo);
