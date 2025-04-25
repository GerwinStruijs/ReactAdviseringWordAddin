import { promiseWrapper } from "./promise-wrapper";

const cache = new Map<string, ReturnType<typeof promiseWrapper>>();

export function getResource<TArgs extends any[], TResult>(
    key: string,
    fn: (...args: TArgs) => Promise<TResult>,
    ...args: TArgs
) {
    const cacheKey = `${key}:${JSON.stringify(args)}`;
    if (!cache.has(cacheKey)) {
        const promise = fn(...args);
        cache.set(cacheKey, promiseWrapper(promise));
    }
    return cache.get(cacheKey)!;
}