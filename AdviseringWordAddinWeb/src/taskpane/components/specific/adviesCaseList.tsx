import { useEffect, useState } from "react";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import * as adviesCaseService from "../../services/adviesCase";
import * as adviesCaseTypes from "../../types/adviesCaseTypes";
import { useErrorBoundary } from "react-error-boundary";

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

let fullfilled = false;
let promise: Promise<void> | null = null;
const useTimeout = (ms: number) => {
    if (!fullfilled) {
        throw promise ||= new Promise((res) => {
            setTimeout(() => {
                fullfilled = true;
                res();
            }, ms);
        });
    }
};

//https://hygraph.com/blog/react-suspense
//https://dev.to/smitterhane/swap-out-useeffect-with-suspense-for-data-fetching-in-react-2leb
export default function AdviesCaseList() {

    const classes = useStyles();

    const { showBoundary } = useErrorBoundary();

    const [adviesCaseProperties, setAdviesCaseProperties] = useState<adviesCaseTypes.AdviesCaseProperty[]>([]);
    
    useEffect(() => {
        adviesCaseService.getAdviesCaseProperties("W01.01.00001")
            .then((adviesCaseProperties) => {
                setAdviesCaseProperties(adviesCaseProperties)
            })
            .catch((error) => showBoundary(error));
            //.finally(() => { fullfilled = false; });
    }, []);

    useTimeout(2000);

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
