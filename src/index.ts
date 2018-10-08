export * from "./maybeGet";
export * from "./strictAssign";
export * from "./withTimeout";
export * from "./DeepRequired";

export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
