/* eslint-disable @typescript-eslint/no-explicit-any */
import { promiseWrapper } from "./promise-wrapper";

type WrappedResource<TResult> = ReturnType<typeof promiseWrapper<TResult>>;
const cache = new Map<string, WrappedResource<any>>();
export function getResource<TArgs extends any[], TResult>(
    key: string,
    fn: (...args: TArgs) => Promise<TResult>,
    ...args: TArgs
): WrappedResource<TResult> {
    const cacheKey = `${key}:${JSON.stringify(args)}`;

    if (!cache.has(cacheKey)) {
        const promise = fn(...args);
        cache.set(cacheKey, promiseWrapper<TResult>(promise));
    }

    return cache.get(cacheKey)!;
}