import { List, ListItem, makeStyles } from "@fluentui/react-components";
import { getResource } from "../../utils/generic-resource-cache";
import { getUserDataProperties } from "../../services/user-data-service";
import { UserDataProperty } from "../../types/user-data-types";

const useStyles = makeStyles({
    properties: { padding: '10px' },
    propertiesList: {},
    propertiesListItem: { padding: '5px' },
    propertiesListItemHeader: { fontWeight: '500' },
});

/**
 * Displays the user data
 * @param userId The user id of the user to display the data for
 * @returns A list of user data properties
 */
export default function UserDataList({ userId }: { userId: string }) {
    const classes = useStyles();

    const resource = getResource<[string], UserDataProperty[]>("userData", getUserDataProperties, userId)
    const userDataProperties = resource.read();

    return (
        <div className={classes.properties}>
            <div>
                <List className={classes.propertiesList} navigationMode="items">
                    {userDataProperties.map((userDataProperty) => (
                        <ListItem key={userDataProperty.tag}>
                            <div className={classes.propertiesListItem}>
                                <div className={classes.propertiesListItemHeader}>
                                    {userDataProperty.name}
                                </div>
                                <div>
                                    {userDataProperty.property}
                                </div>
                            </div>
                        </ListItem>
                ))}
                </List>
            </div>
        </div>
    );
}