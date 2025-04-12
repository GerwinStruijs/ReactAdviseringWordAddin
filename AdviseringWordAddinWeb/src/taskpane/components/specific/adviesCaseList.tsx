import { makeStyles, List, ListItem } from "@fluentui/react-components";
import * as adviesCaseService from "../../services/adviesCase";
import * as adviesCaseTypes from "../../types/advies-case-types";

import { promiseWrapper } from "../../utils/promise-wrapper";

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

const adviesCasePropertiesResource = promiseWrapper(
    adviesCaseService.getAdviesCaseProperties("W01.01.00001")
);

export default function AdviesCaseList() {

    const classes = useStyles();

    const adviesCaseProperties: adviesCaseTypes.AdviesCaseProperty[] = adviesCasePropertiesResource.read();

    return (
        <div className={classes.properties}>
            <div>
                <List className={classes.propertiesList} navigationMode="items">
                    {adviesCaseProperties.map((adviesCaseProperty) => (
                        <ListItem key={adviesCaseProperty.tag}>
                            <div className={classes.propertiesListItem}>
                                <div className={classes.propertiesListItemHeader}>
                                    {adviesCaseProperty.name}
                                </div>
                                <div>
                                    {adviesCaseProperty.property}
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};
