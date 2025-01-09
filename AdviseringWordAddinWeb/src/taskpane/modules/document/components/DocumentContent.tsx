import { Accordion } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

import documentConfig from '../../../config/DocumentConfig.json';
import React, { useCallback, useEffect, useState } from "react";
import { getBookmarks, getProperties } from "./DocumentData";
import DocumentContentPart from "./DocumentContentPart";

const useStyles = makeStyles(
    {
        accordion: {
        }
    });

export type BodyProps = unknown
const DocumentContent: React.FC<BodyProps> = () => {

    const classes = useStyles();

    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [properties, setProperties] = useState<number>(0);
    const [bookmarks, setBookmarks] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const propertiesResult = await getProperties(documentConfig.propertiesMapper);
            setProperties(propertiesResult.length);

            const bookmarksResult = await getBookmarks(documentConfig.bookmarkMapper);
            setBookmarks(bookmarksResult.length);
        };

        fetchData();
    }, []);

    const handleAccordionItemClick = useCallback((value: number) => {
        setSelectedItem(value);
    }, []);

    return (<Accordion className={classes.accordion} collapsible>
            <DocumentContentPart
                value={1}
                title="Document properties"
                content={`Totaal aantal gevonden document eigenschappen: ${properties}`}
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
            />
            <DocumentContentPart
                value={2}
                title="Document content"
                content={`Totaal aantal gevonden document bookmarks: ${bookmarks}`}
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
            />
            <DocumentContentPart
                value={3}
                title="Case details"
                content="Accordion Panel 3"
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
            />
        </Accordion>
    );
};

export default DocumentContent;