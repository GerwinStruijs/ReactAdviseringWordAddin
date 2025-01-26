import { useEffect, useState } from "react";
import * as wordDocumentService from "../../services/wordDocument";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import { DocumentProperty } from "../../types/documentTypes";
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
const WordProprtieList: React.FC<BodyProps> = () => {

    const classes = useStyles();

    const { showBoundary } = useErrorBoundary();

    const [properties, setProperties] = useState<DocumentProperty[]>([]);

    useEffect(() => {

        wordDocumentService.getCustomProperties()
            .then((customProperties) => setProperties(customProperties))
            .catch((error) => {
                showBoundary(error);
            });
    }, []);

    return (
        <div className={classes.properties}>
            <div>
                <List className={classes.propertiesList} navigationMode="items">
                    {properties.map((property) => ( 
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

export default WordProprtieList;