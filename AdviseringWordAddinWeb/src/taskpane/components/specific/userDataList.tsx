import { makeStyles } from "@fluentui/react-components";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/auth-config";

const useStyles = makeStyles(
    {
        properties: {
            padding: '10px',
        },
        propertiesList: {},
        propertiesListItem: { padding: '5px' },
        propertiesListItemHeader: {
            fontWeight: '500'
        },
    });

export default function UserDataList() {

    const classes = useStyles();

    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    if (!activeAccount) {

        instance.loginPopup({
            ...loginRequest,
            prompt: 'select_account',
        });
    }
     
    return (
        <div className={classes.properties}>
            <UnauthenticatedTemplate>
                <p>Logging you in...</p>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <p>You're signed in!</p>
                <p>{activeAccount?.idToken}</p>
            </AuthenticatedTemplate>  
        </div>
    );
};
