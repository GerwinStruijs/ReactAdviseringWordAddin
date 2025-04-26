import { makeStyles, List, ListItem } from "@fluentui/react-components";
import * as adviesCaseService from "../../services/advies-case-service";
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

const cache = new Map<string, ReturnType<typeof promiseWrapper<adviesCaseTypes.AdviesCaseProperty[]>>>();

export default function AdviesCaseList({ caseId }: { caseId: string }) {

    const classes = useStyles();

    if (!cache.has(caseId)){

        const promise = adviesCaseService.getAdviesCaseProperties(caseId);
        cache.set(caseId, promiseWrapper<adviesCaseTypes.AdviesCaseProperty[]>(promise));
    }

    const adviesCaseProperties: adviesCaseTypes.AdviesCaseProperty[] = cache.get(caseId)!.read();

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
