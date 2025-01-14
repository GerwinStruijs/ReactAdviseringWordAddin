import React from "react";
import { AccordionHeader, mergeClasses } from "@fluentui/react-components";
import { makeStyles, tokens } from "@fluentui/react-components";
import { AddSquareFilled } from "@fluentui/react-icons";

const useStyles = makeStyles({
    contentHeader: {
        backgroundColor: tokens.colorNeutralBackground5,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Selected,
        },
        display: "flex",
        columnGap: "20px"
    },
    contentHeaderChecked: {
        backgroundColor: tokens.colorNeutralBackground3Selected,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Selected,
        }
    },
    contentHeaderLayout: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignContent: "left",
        columnGap: "20px"
    }
});

interface ContentItemHeaderProps {
    title: string;
    isSelected: boolean;
}

const ContentItemHeader: React.FC<ContentItemHeaderProps> = ({ title, isSelected }) => {
    const classes = useStyles();

    return (
        <AccordionHeader expandIcon={<AddSquareFilled color={tokens.colorBrandBackground} /> } expandIconPosition="end" className={mergeClasses(classes.contentHeader, isSelected && classes.contentHeaderChecked)}>
            <div className={classes.contentHeaderLayout}>
                <h4>{title}</h4>

            </div>
        </AccordionHeader>
    );
};

export default ContentItemHeader;