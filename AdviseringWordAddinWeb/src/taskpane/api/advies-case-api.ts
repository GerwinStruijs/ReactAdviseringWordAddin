
import { AdviesCaseDTO, AdviesCaseResponse } from "../types/advies-case-response";
import { raadsaamApiClient } from "./raadsaam-api-client";

/**
 * Haal een adviescase op
 * @param caseId
 * @returns AdviesCase
 */
export async function getAdviesCase(caseId: string): Promise<AdviesCaseResponse> {
    const response = await raadsaamApiClient.get<{ data : AdviesCaseDTO }>(`/case/${caseId}`);
    return response.data;
}