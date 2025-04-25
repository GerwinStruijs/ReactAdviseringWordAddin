import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

export const graphApiClient = axios.create({
    baseURL: 'https://graph.microsoft.com/v1.0',
});

const adapter = new MockAdapter(graphApiClient, { delayResponse: 2000 });

adapter.onGet('/users/6d788f90-0a0b-4292-9507-10d7af6d109f').reply(200, {
    data: {
        "businessPhones": [
            "624618234"
        ],
        "displayName": "Gerwin Struijs",
        "givenName": "Gerwin",
        "jobTitle": null,
        "mail": "admstruijsg@struijsg.onmicrosoft.com",
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": "en",
        "surname": "Struijs",
        "userPrincipalName": "admstruijsg@struijsg.onmicrosoft.com",
        "id": "6d788f90-0a0b-4292-9507-10d7af6d109f"
    }
});