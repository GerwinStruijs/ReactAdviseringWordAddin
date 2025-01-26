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

export type BodyProps = unknown
const AdviesCaseList: React.FC<BodyProps> = () => {

    const classes = useStyles();

    const { showBoundary } = useErrorBoundary();

    const [adviesCaseProperties, setAdviesCaseProperties] = useState<adviesCaseTypes.AdviesCaseProperty[]>([]);

    useEffect(() => {

        adviesCaseService.getAdviesCaseProperties("W01.01.00001")
            .then((adviesCaseProperties) => {
                setAdviesCaseProperties(adviesCaseProperties)
            })
            .catch((error) => showBoundary(error));
    }, []);

   
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

export default AdviesCaseList;
