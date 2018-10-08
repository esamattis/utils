import {wait} from "../src";
import {withTimeout} from "../src/withTimeout";

async function promiseString(s: string) {
    await wait(20);
    return s;
}

test("timeout race ok", async () => {
    const res: string = await withTimeout("foo ok", 50, promiseString("foo"));
    expect(res).toBe("foo");
});

test("timeout race fail", async () => {
    expect.assertions(1);
    await withTimeout("foo fail", 10, promiseString("foo")).catch(error => {
        expect(String(error)).toEqual("Error: Timeout after 10ms: foo fail");
    });
});
