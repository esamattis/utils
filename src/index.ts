export * from "./maybeGet";
export * from "./strictAssign";

export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
