import React from "react";
import ContentItemHeader from "./ContentItemHeader";
import { AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { tokens, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({

    ContentItem: {
        padding: '10px',
        //border: '1px solid gray',
    },
    contentItemPanel: {
        marginLeft: '0px',
        marginRight: '0px',
        //backgroundColor: tokens.colorNeutralBackground5
    }

});

interface ContentItemProps {
    value: number;
    title: string;
    content: React.ReactNode;
    selectedItem: number;
    onClick: (value: number) => void;
}

const ContentItem: React.FC<ContentItemProps> = ({ value, title, content, selectedItem, onClick }) => {

    const classes = useStyles();

    return (
        <AccordionItem className={classes.ContentItem} value={value.toString()} onClick={() => onClick(value)}>
            <ContentItemHeader title={title} isSelected={selectedItem === value} />
            <AccordionPanel className={classes.contentItemPanel}>
               {content}
            </AccordionPanel>
        </AccordionItem>
    );
};

export default React.memo(ContentItem);