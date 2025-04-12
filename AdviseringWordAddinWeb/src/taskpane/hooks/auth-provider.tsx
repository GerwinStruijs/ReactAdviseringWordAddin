import { PublicClientApplication, EventType, AuthenticationResult } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";
import { msalConfig } from "../auth/auth-config";

interface AuthProviderProps {
    children: React.ReactNode;
}

const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
    const authenticationResult = event.payload as AuthenticationResult;
    const account = authenticationResult?.account;

    if (event.eventType === EventType.LOGIN_SUCCESS && account) {
        msalInstance.setActiveAccount(account);
    }
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};