type NotNill<T> = T extends null | undefined ? never : T;

type Primitive = undefined | null | boolean | string | number | Function;

export type DeepRequired<T> = T extends Primitive
    ? NotNill<T>
    : {
          [P in keyof T]-?: T[P] extends Array<infer U>
              ? Array<DeepRequired<U>>
              : T[P] extends ReadonlyArray<infer U2>
                  ? DeepRequired<U2>
                  : DeepRequired<T[P]>
      };

export function get<T, R>(
    source: T,
    getter: (source: DeepRequired<T>) => R,
): R | null;

export function get<T, D, R>(
    source: T,
    defaulValue: D,
    getter: (source: DeepRequired<T>) => R,
): R | D;

export function get(...args: any[]): any {
    if (args.length == 2) {
        const [source, getter] = args;
        return getter(source);
    }
}
