import { apiClient } from "./client";
import { AdviesCase } from "../types/adviesCase";

export interface adviesCaseResponse {
    data: AdviesCase;
}

async function getAdviesCase(caseId: string) {
    const response = await apiClient.get<{ data: AdviesCase }>(`/case/${caseId}`);
    const adviesCase = response.data.data;
    return adviesCase;
}

export default { getAdviesCase };