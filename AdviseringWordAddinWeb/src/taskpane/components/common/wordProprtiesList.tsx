import { useEffect, useState } from "react";
import { getProperties } from "../../api/wordDocument";
import documentConfig from '../../config/config.json';
import { makeStyles, List, ListItem } from "@fluentui/react-components";

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

    const [properties, setProperties] = useState<Word.CustomProperty[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await getProperties(documentConfig.propertiesMapper);
            setProperties(result);
        };

        fetchData();
    }, []);

    return (
        <div className={classes.properties}>
            <div>
                <List className={classes.propertiesList} navigationMode="items">
                    {properties.map((property) => ( 
                        <ListItem key={property.key}>
                            <div className={classes.propertiesListItem}> 
                                <div className={classes.propertiesListItemHeader}>
                                    {property.key}
                                </div>
                                <div>
                                    {property.value}
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