﻿export interface UserDataResponse {
    data: UserDataDTO
}
export interface UserDataDTO {
    businessPhones: string[]
    displayName: string
    givenName: string
    jobTitle: string
    mail: string
    mobilePhone: string
    officeLocation: string
    preferredLanguage: string
    surname: string
    userPrincipalName: string
    id: string
}