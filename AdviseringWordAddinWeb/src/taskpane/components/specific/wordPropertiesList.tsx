import * as wordDocumentService from "../../services/wordDocument";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import * as documentTypes from "../../types/documentTypes";
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

const customPropertiesResource = promiseWrapper(
    wordDocumentService.getCustomProperties()
);

export default function WordPropertieList() {

    const classes = useStyles();

    const customProperties: documentTypes.CustomProperty[] = customPropertiesResource.read();

    return (
        <div className={classes.properties}>
            <div>
                <List className={classes.propertiesList} navigationMode="items">
                    {customProperties.map((property) => ( 
                        <ListItem key={property.tag}>
                            <div className={classes.propertiesListItem}> 
                                <div className={classes.propertiesListItemHeader}>
                                    {property.name}
                                </div>
                                <div>
                                    {property.property.value}
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};