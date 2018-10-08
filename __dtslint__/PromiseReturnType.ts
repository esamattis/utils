import {PromiseReturnType} from "../src/PromiseReturnType";

async function resturnStr() {
    return "foo";
}

// $ExpectType string
type Foo = PromiseReturnType<typeof resturnStr>;

class MyClass {
    async foo() {
        return 1;
    }

    render() {
        const foo = this.foo;

        // $ExpectType number
        type bar = PromiseReturnType<typeof foo>;
    }
}
