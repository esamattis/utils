import {NotNull} from "./deep-required";

export function maybeGet<T, R>(
    source: T,
    getter: (source: T) => R,
): NotNull<R> | undefined;

export function maybeGet<T, D, R>(
    source: T,
    defaulValue: D,
    getter: (source: T) => R,
): NotNull<R> | D;

export function maybeGet(...args: any[]): any {
    if (args.length === 2) {
        const [source, getter] = args;
        return realGet(source, undefined, getter);
    }

    if (args.length === 3) {
        const [source, defaultValue, getter] = args;
        return realGet(source, defaultValue, getter);
    }

    throw new Error("Invalid argument count for get()");
}

function realGet(
    source: any,
    defaultValue: unknown,
    getter: (source: any) => any,
) {
    const recordedPath: string[] = [];
    const recorder: any = new Proxy(source, {
        get(_obj, prop) {
            recordedPath.push(prop as string);
            return recorder;
        },
    });

    getter(recorder);

    let value: any = source;

    while (recordedPath.length) {
        const prop = recordedPath.shift();
        if (prop) {
            value = value[prop];
        }

        if (value === null || value === undefined) {
            return defaultValue;
        }
    }

    return value;
}

export default maybeGet;
