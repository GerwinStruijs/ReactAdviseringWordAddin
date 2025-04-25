import React, { useEffect, useState } from "react";
import {
    PublicClientApplication,
    EventType,
    AuthenticationResult,
} from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig, loginRequest } from "../auth/auth-config";

interface AuthProviderProps {
    children: React.ReactNode;
}

const msalInstance = new PublicClientApplication(msalConfig);

// Setup login success callback
msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const authResult = event.payload as AuthenticationResult;
        if (authResult.account) {
            msalInstance.setActiveAccount(authResult.account);
        }
    }
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initializeMsal = async () => {
            try {
                // Always initialize MSAL first
                await msalInstance.initialize();

                const accounts = msalInstance.getAllAccounts();
                if (accounts.length > 0) {
                    msalInstance.setActiveAccount(accounts[0]);
                    setIsReady(true);
                    return;
                }

                // Prompt login if no active session
                const response = await msalInstance.loginPopup({
                    ...loginRequest,
                    prompt: "select_account",
                });

                msalInstance.setActiveAccount(response.account);
                setIsReady(true);
            } catch (error) {
                console.error("MSAL initialization or login failed:", error);
            }
        };

        initializeMsal();
    }, []);

    if (!isReady) {
        return <div>Signing you in...</div>;
    }

    return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};