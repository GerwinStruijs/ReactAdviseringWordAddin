export interface AdviesCaseResponse {
    data: AdviesCaseDTO
}
export interface AdviesCaseDTO {
    zaakNummer: string,
    betreft: string,
    missivedatum: string,
    missievenummer: string,
    aanvrager: string,
    betrokkenBewindspersonen: [
        {
            naam: string,
            rol: string
        }
    ],
    typeAanvraagCode: string,
    kamer: string,
    verbijzondering: string,
    statusAanvraag: string,
    onderdeel: string,
    processtap: string,
    redactioneleBijlage: string,
    rapporteurs: [
        {
            naam: string
        },
    ],
    meelezers: [
        {
            naam: string
        }
    ],
    adviseurs: [
        {
            naam: string
        }
    ],
    dictumLetter: string,
    gewijzigd: string,
    dictumUrl: string,
    omschrijvingOnderdeel: string,
    aanhef: string,
    ondertekendDoor: string
}