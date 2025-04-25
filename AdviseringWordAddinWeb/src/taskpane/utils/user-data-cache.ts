import { getUserDataProperties } from "../services/user-data-service";
import { promiseWrapper } from "./promise-wrapper";
import type { UserDataProperty } from "../types/user-data-types";

const cache = new Map<string, ReturnType<typeof promiseWrapper<UserDataProperty[]>>>();

export function getUserDataPropertiesResource(userId: string) {
    if (!cache.has(userId)) {
        const promise = getUserDataProperties(userId);
        cache.set(userId, promiseWrapper<UserDataProperty[]>(promise));
    }

    return cache.get(userId)!;
}