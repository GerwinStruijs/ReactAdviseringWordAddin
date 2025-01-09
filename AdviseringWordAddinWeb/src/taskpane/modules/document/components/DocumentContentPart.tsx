import React from "react";
import { AccordionItem, AccordionHeader, AccordionPanel, mergeClasses } from "@fluentui/react-components";
import { CheckboxUncheckedFilled } from "@fluentui/react-icons";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    accordionHeader: {
        backgroundColor: tokens.colorNeutralBackground3,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Hover,
        },
        display: "flex",
        columnGap: "20px"
    },
    accordionHeaderChecked: {
        backgroundColor: tokens.colorNeutralBackground3Selected,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Selected,
        }
    },
    accordionHeaderContent: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        columnGap: "20px"
    }
});

interface AccordionItemComponentProps {
    value: number;
    title: string;
    content: string;
    selectedItem: number;
    onClick: (value: number) => void;
}

const DocumentContentPart: React.FC<AccordionItemComponentProps> = ({ value, title, content, selectedItem, onClick }) => {
    const classes = useStyles();

    return (
        <AccordionItem value={value.toString()} onClick={() => onClick(value)}>
            <AccordionHeader className={mergeClasses(classes.accordionHeader, selectedItem === value && classes.accordionHeaderChecked)}>
                <div className={classes.accordionHeaderContent}>
                    <div>{title}</div>
                    <div><CheckboxUncheckedFilled /></div>
                </div>
            </AccordionHeader>
            <AccordionPanel>
                <div>{content}</div>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default React.memo(DocumentContentPart);