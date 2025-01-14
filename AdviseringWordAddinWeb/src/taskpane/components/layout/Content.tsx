import { Accordion } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";
import React, { useCallback, useState } from "react";
import ContentItem from "./ContentItem";
import Proprties from "../common/Proprties";
import ContentControls from "../common/ContentControls";

const useStyles = makeStyles(
    {
        accordion: {
            //border: '1px solid gray',
            //marginBottom: '10px'
        }
    });

export type BodyProps = unknown
const Content: React.FC<BodyProps> = () => {

    const classes = useStyles();

    const [selectedItem, setSelectedItem] = useState<number>(0);
    const handleAccordionItemClick = useCallback((value: number) => {
        setSelectedItem(value);
    }, []);

    return (<Accordion className={classes.accordion} collapsible>
                <ContentItem
                value={1}
                title="Document properties"
                content={<Proprties />}
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
                />
                <ContentItem
                value={2}
                title="Document content"
                content={<ContentControls />}
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
                />
                <ContentItem
                value={3}
                title="Case details"
                content={'Accordion Panel 3'}
                selectedItem={selectedItem}
                onClick={handleAccordionItemClick}
                />
        </Accordion>
    );
};

export default Content;