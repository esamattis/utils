export type UnwrapPromise<T> = T extends Promise<infer V> ? V : T;

export type PromiseReturnType<
    T extends (...args: any[]) => any
> = UnwrapPromise<ReturnType<T>>;
