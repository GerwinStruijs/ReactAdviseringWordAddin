
"use client";
import React, { Suspense, useState } from "react";
import ContentItemHeader from "./content-Item-header";
import { AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { makeStyles, Spinner } from "@fluentui/react-components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../common/error-fallback";
import { logErrorToService } from "../../utils/logger";

const useStyles = makeStyles({
    ContentItem: {
        padding: '10px',
    },
    contentItemPanel: {
        marginLeft: '0px',
        marginRight: '0px',
    },
    contentItemPanelLoader: {
        padding: '10px',
    }
});

export default function ContentItem({ index, title, content }) {

    const classes = useStyles();

    const [expaned, setExpaned] = useState<boolean>(false);

    return (
        <AccordionItem className={classes.ContentItem} value={index.toString()} onClick={() => setExpaned(!expaned)}>
            <ContentItemHeader title={title} isExpanded={expaned} />
            <AccordionPanel className={classes.contentItemPanel}>
                <Suspense fallback={<div className={classes.contentItemPanelLoader}><Spinner size="medium" label="Loading..." /></div>}>
                    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}>
                        {content}
                    </ErrorBoundary>
                </Suspense> 
            </AccordionPanel>
        </AccordionItem>
    );
}