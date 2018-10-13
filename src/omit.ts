export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type UnknownMap = {[key: string]: unknown};

export function omit<T extends {}, K extends keyof T>(
    data: T,
    keys: K[],
): Omit<T, K> {
    const anyData = data as UnknownMap;
    const anyKeys = keys as string[];

    const next: UnknownMap = {};

    for (const key in anyData) {
        if (!anyKeys.includes(key)) {
            next[key] = anyData[key];
        }
    }

    return next as any;
}
