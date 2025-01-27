
import { AdviesCaseResponse, AdviesCaseDTO } from "../types/adviesCaseResponse";
import { apiClient } from "./apiClient";

/**
 * Haal een adviescase op
 * @param caseId
 * @returns AdviesCase
 */
export async function getAdviesCase(caseId: string): Promise<AdviesCaseResponse> {
    const response = await apiClient.get<{ data : AdviesCaseDTO }>(`/case/${caseId}`);
    return response.data;
}