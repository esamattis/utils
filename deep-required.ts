export type NotNull<T> = T extends null | undefined ? never : T;

type Primitive = undefined | null | boolean | string | number | Function;

export type DeepRequired<T> = T extends Primitive
    ? NotNull<T>
    : {
          [P in keyof T]-?: T[P] extends Array<infer U>
              ? Array<DeepRequired<U>>
              : T[P] extends ReadonlyArray<infer U2>
                  ? DeepRequired<U2>
                  : DeepRequired<T[P]>
      };
