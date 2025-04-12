import * as wordDocumentService from "../../services/wordDocument";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import * as documentTypes from "../../types/document-types";
import { promiseWrapper } from "../../utils/promise-wrapper";

const useStyles = makeStyles(
{
    controls: {
        padding: '10px',
    },
    controlsList: {},
    controlsListItem: { padding: '5px' },
    controlsListItemHeader: {
        fontWeight: '500'
    },
    });

const contentControlsResource = promiseWrapper(
    wordDocumentService.getContentControls()
);

export default function WordControlList() {

    const classes = useStyles();

    const contentControls: documentTypes.ContentControl[] = contentControlsResource.read();

    return (<div>
        <div className={classes.controls}>
            <div>
                <List className={classes.controlsList} navigationMode="items">
                    {contentControls.map((contentControl) => (
                        <ListItem key={contentControl.tag}>
                            <div className={classes.controlsListItem}>
                                <div className={classes.controlsListItemHeader}>
                                    {contentControl.name}
                                </div>
                                <div>
                                    {contentControl.property.text}
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    </div>);
};