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

const res: number | undefined = maybeGet(foo, o => o!.foo!.bar!.num);
const res1: string | undefined = maybeGet(foo, o => o.ding);
const res2: number | undefined = maybeGet(foo, o => o.arr[0]);
const res3: string | undefined = maybeGet(foo, o => o.dong);
const res4: number | undefined = maybeGet(foo, o => o!.arrOb![0]!.foo!);
const res8: number | undefined = maybeGet(foo.foo, o => o!.bar!.num);
const res00 = maybeGet(foo, o => o.arr);

maybeGet(foo, o => o!.arrOb[0]!.foo);

const res5: number = maybeGet(foo, 1, o => o!.foo!.bar!.num);
const res6: number | string = maybeGet(foo, "s", o => o!.foo!.bar!.num);

// $ExpectError
const res10: string = maybeGet(foo, 1, o => o!.foo!.bar!.num);

interface GQL_Node {
    hello?: string;
}

interface GQL_Edge {
    /**
     * The item at the end of the edge
     */
    node: GQL_Node | null;
}

interface GQL_Edges {
    /**
     * Information to aid in pagination
     */
    edges: (GQL_Edge | null)[] | null;

    pageInfo: {} | null;
}

declare const data: {ding: GQL_Edges} | null;

const res7: string = maybeGet(
    data,
    "default",
    o => o!.ding.edges![0]!.node!.hello,
);
const res9: string | undefined = maybeGet(
    data,
    o => o!.ding.edges![0]!.node!.hello,
);
