import { useEffect, useState } from "react";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import AdviesCaseApi from "../../api/adviesCase";
import { AdviesCase } from "../../types/adviesCase";

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

    const [adviesCase, setAdviesCase] = useState<AdviesCase>();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            AdviesCaseApi.getAdviesCase("W01.01.0001")
                .then((adviesCase) => setAdviesCase(adviesCase))
                .catch(() => setHasError(true));
        };

        fetchData();
    }, []);

    return (
        <div className={classes.properties}>
            <div>
                {/*<List className={classes.propertiesList} navigationMode="items">*/}
                {/*    {properties.map((property) => (*/}
                {/*        <ListItem key={property.key}>*/}
                {/*            <div className={classes.propertiesListItem}>*/}
                {/*                <div className={classes.propertiesListItemHeader}>*/}
                {/*                    {property.key}*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    {property.value}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </div>
        </div>
    );
};

export default AdviesCaseList;