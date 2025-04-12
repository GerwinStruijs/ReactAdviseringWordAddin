import { Button, makeStyles } from "@fluentui/react-components";
import * as userDataService from "../../services/userData";

import { promiseWrapper } from "../../utils/promise-wrapper";
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

const userDataResource = promiseWrapper(
    userDataService.getUserData()
);

export default function UserDataList() {

    const classes = useStyles();

    const userData: Promise<void> = userDataResource.read();

    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    const handleRedirect = () => {
        instance
            .loginRedirect({
                ...loginRequest,
                prompt: 'create',
            })
            .catch((error: Error) => console.log(error));
    };

    return (
        <div className={classes.properties}>
            <UnauthenticatedTemplate>
                <Button className="signInButton" onClick={handleRedirect} variant="primary">
                    Sign up
                </Button>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <p>{console.info(activeAccount?.idToken)}</p>
            </AuthenticatedTemplate>  
        </div>
        //<div className={classes.properties}>
        //    <div>
        //        {/*<List className={classes.propertiesList} navigationMode="items">*/}
        //        {/*    {adviesCaseProperties.map((adviesCaseProperty) => (*/}
        //        {/*        <ListItem key={adviesCaseProperty.tag}>*/}
        //        {/*            <div className={classes.propertiesListItem}>*/}
        //        {/*                <div className={classes.propertiesListItemHeader}>*/}
        //        {/*                    {adviesCaseProperty.name}*/}
        //        {/*                </div>*/}
        //        {/*                <div>*/}
        //        {/*                    {adviesCaseProperty.property}*/}
        //        {/*                </div>*/}
        //        {/*            </div>*/}
        //        {/*        </ListItem>*/}
        //        {/*    ))}*/}
        //        {/*</List>*/}
        //    </div>
        //</div>
    );
};
