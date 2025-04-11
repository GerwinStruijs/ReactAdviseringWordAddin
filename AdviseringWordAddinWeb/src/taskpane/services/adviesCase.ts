import * as adviesCaseApi from "../api/adviesCase";
import * as adviesCaseTypes from "../types/adviesCaseTypes";
import { AdviesCaseResponse } from "../types/adviesCaseResponse";
import { AdviesFase, AdviesOnderdeel, Dictum } from "../types/adviesEnums";

/**
 * Haal een adviescase op
 * @param caseId
 * @returns AdviesCase
 */
export async function getAdviesCase(caseId: string): Promise<adviesCaseTypes.AdviesCase> {

    const adviesCaseResponse: AdviesCaseResponse = await adviesCaseApi.getAdviesCase(caseId);

    const adviesCase: adviesCaseTypes.AdviesCase = new adviesCaseTypes.AdviesCase(
        adviesCaseResponse.data.zaakNummer,
        adviesCaseResponse.data.typeAanvraagCode,
        adviesCaseResponse.data.kamer,
        new Date(adviesCaseResponse.data.missivedatum),
        AdviesOnderdeel[adviesCaseResponse.data.onderdeel as keyof typeof AdviesOnderdeel],
        AdviesFase[adviesCaseResponse.data.processtap as keyof typeof AdviesFase],
        Dictum[adviesCaseResponse.data.dictumLetter as keyof typeof Dictum],
        adviesCaseResponse.data.redactioneleBijlage === 'true');

    return adviesCase;
}

/**
 * Haal de eigenschappen van een adviescase op
 * @param caseId
 * @returns AdviesCaseProperty[]
 */
export async function getAdviesCaseProperties(caseId: string): Promise<adviesCaseTypes.AdviesCaseProperty[]> {

    const adviesCase: adviesCaseTypes.AdviesCase = await getAdviesCase(caseId);

    const adviesCaseProprties: adviesCaseTypes.AdviesCaseProperty[] = [];
    Reflect.ownKeys(adviesCase).map(key => {
        adviesCaseProprties.push({ name: String(key), tag: String(key), property: String(adviesCase[key as keyof adviesCaseTypes.AdviesCase]) });
    });

    console.info(`Succesfully 'procesed' ${adviesCaseProprties.length} advies case properties.`, "getAdviesCaseProperties");
    return adviesCaseProprties;
}