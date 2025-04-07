import { useEffect, useState } from "react";
import * as wordDocumentService from "../../services/wordDocument";
import { makeStyles, List, ListItem } from "@fluentui/react-components";
import { DocumentControl } from "../../types/documentTypes";
import { useErrorBoundary } from "react-error-boundary";

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

export default function WordControlList() {

    const classes = useStyles();

    const { showBoundary } = useErrorBoundary();

    const [contentControls, setContentControls] = useState<DocumentControl[]>([]);

    useEffect(() => {
        
        wordDocumentService.getContentControls()
            .then((contentControls) => setContentControls(contentControls))
            .catch((error) => {
               showBoundary(error);
            });

    }, []);

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