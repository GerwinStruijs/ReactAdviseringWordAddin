import { UserDataDTO, UserDataResponse } from "../types/user-data-response";
import { graphApiClient } from "./graph-api-client";

/**
 * Haal een adviescase op
 * @param userId
 * @returns AdviesCase
 */
export async function getUserData(userId: string): Promise<UserDataResponse> {
    const accessToken = "";

    graphApiClient.interceptors.request.use(
        async (config) => {
                config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error: Error) => {
            return Promise.reject(error);
        }
    );

    const response = await graphApiClient.get<{ data: UserDataDTO }>(`/users/${userId}`);
    return response.data;
}