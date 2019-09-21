export * from "./strictAssign";
export * from "./withTimeout";
export * from "./DeepRequired";
export * from "./omit";
export * from "./notEmpty";

export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export type ArgumentsType<T> = T extends (...args: infer V) => any ? V : never;
