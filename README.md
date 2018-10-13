# Epeli's Javascript / Typescript utilities

Some utility functions I use across multiple projects that
are not available in any de facto utility libraries like lodash.
Very Typescript heavy.

Install

    npm install @epeli/utils

## Exported functions

See [`__dtslint__`](https://github.com/epeli/utils/tree/master/__dtslint__) for usage examples

## omit(obj: object, keys: string[]): object

Like omit() in Lodash but properly typed for Typescript.

Supports only plain objects.

## strictAssign(target: object, ...sources: object[]): object

Same as Object.assign() but does not allow extending the type.
Eg. the return type is always the same as target.

Works nicely with Immer.

## maybeGet(obj: T, default?: R, getter: (obj: T) => R): R

Get value from object with possibly null or undefined values.

Basically same as [facebookincubator/idx](https://github.com/facebookincubator/idx)
but implemented with Proxies.

You may use the Typescript null assertion operator safely in the getter callback.

## wait(time: number): Promise<void>

`setTimeout` for async functions.

## withTimeout(message: string, time: number, promise: Promise)

Resolve promise within the `time` (ms) or reject with the message.
