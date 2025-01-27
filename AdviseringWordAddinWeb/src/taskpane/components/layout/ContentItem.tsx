"use client";
import React, { useState } from "react";
import ContentItemHeader from "./contentItemHeader";
import { AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../common/errorFallback";
import { logErrorToService } from "../../utils/logger";

const useStyles = makeStyles({
    ContentItem: {
        padding: '10px',
    },
    contentItemPanel: {
        marginLeft: '0px',
        marginRight: '0px',
    }
});

interface ContentItemProps { index: number; title: string; content: React.ReactNode; }
const ContentItem: React.FC<ContentItemProps> = ({ index, title, content }) => {
    const classes = useStyles();

    const [expaned, setExpaned] = useState<boolean>(false);

    return (
        <AccordionItem className={classes.ContentItem} value={index.toString()} onClick={() => setExpaned(!expaned)}>
            <ContentItemHeader title={title} isExpanded={expaned} />
            <AccordionPanel className={classes.contentItemPanel}>
                <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}>
                    {content}
                </ErrorBoundary>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default React.memo(ContentItem);