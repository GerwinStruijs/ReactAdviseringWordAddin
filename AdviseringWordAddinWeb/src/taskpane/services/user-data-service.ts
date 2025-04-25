import * as userDataApi from "../api/user-data-api";
import { UserDataResponse } from "../types/user-data-response";
import * as userDataTypes from "../types/user-data-types";

/**
 * Haal een user op
 * @param userId
 * @returns userData
 */
export async function getUserData(userId: string): Promise<userDataTypes.UserData> {
   
    const userDataResponse: UserDataResponse = await userDataApi.getUserData(userId);

    const userData: userDataTypes.UserData = new userDataTypes.UserData(
        userDataResponse.data.id,
        userDataResponse.data.givenName,
        userDataResponse.data.surname,
        userDataResponse.data.displayName,
        userDataResponse.data.mobilePhone,
        userDataResponse.data.businessPhones,
        userDataResponse.data.jobTitle,
        userDataResponse.data.mail,
        userDataResponse.data.preferredLanguage,
        userDataResponse.data.officeLocation,
        userDataResponse.data.userPrincipalName);

    return userData;
}

/**
 * Haal de eigenschappen van een user op
 * @param userId
 * @returns userDataProperties
 */
export async function getUserDataProperties(userId: string): Promise<userDataTypes.UserDataProperty[]> {

    console.info(`Getting user data properties for user ${userId}`, "getUserDataProperties");

    const userData: userDataTypes.UserData = await getUserData(userId);

    const userDataProprties: userDataTypes.UserDataProperty[] = [];
    Reflect.ownKeys(userData).map(key => {
        userDataProprties.push({ name: String(key), tag: String(key), property: String(userData[key as keyof userDataTypes.UserData]) });
    });

    console.info(`Succesfully 'procesed' ${userDataProprties.length} user data properties.`, "getUserDataProperties");
    return userDataProprties;
}



