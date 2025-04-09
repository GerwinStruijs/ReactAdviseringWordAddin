import { makeStyles } from "@fluentui/react-components";
import * as userDataService from "../../services/userData";

import { promiseWrapper } from "../../utils/promiseWrapper";

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

    return (
        <div className={classes.properties}>
            <div>
                {/*<List className={classes.propertiesList} navigationMode="items">*/}
                {/*    {adviesCaseProperties.map((adviesCaseProperty) => (*/}
                {/*        <ListItem key={adviesCaseProperty.tag}>*/}
                {/*            <div className={classes.propertiesListItem}>*/}
                {/*                <div className={classes.propertiesListItemHeader}>*/}
                {/*                    {adviesCaseProperty.name}*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    {adviesCaseProperty.property}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </div>
        </div>
    );
};
