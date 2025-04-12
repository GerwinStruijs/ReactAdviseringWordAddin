
import { AdviesCaseResponse, AdviesCaseDTO } from "../types/advies-case-response";
import { apiClient } from "./api-client";

/**
 * Haal een adviescase op
 * @param caseId
 * @returns AdviesCase
 */
export async function getAdviesCase(caseId: string): Promise<AdviesCaseResponse> {
    const response = await apiClient.get<{ data : AdviesCaseDTO }>(`/case/${caseId}`);
    return response.data;
}