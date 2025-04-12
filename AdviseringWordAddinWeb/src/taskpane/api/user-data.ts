export async function getUserData(): Promise<void> {

    try {

        //const msalInstance = new PublicClientApplication(msalConfig);
        //if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        //    msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
        //}

        //msalInstance.addEventCallback((event) => {
        //    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        //        const account = event.payload.account;
        //        msalInstance.setActiveAccount(account);
        //    }
        //});


        //const userTokenEncoded = await OfficeRuntime.auth.getAccessToken();
        //const userToken = jwtDecode(userTokenEncoded);
        //console.log(userToken); 
        //console.log(userToken.preferred_username);
        //console.log(userToken.oid);    
    }
    catch (exception) {
        console.log(exception);
       //test
    }
}