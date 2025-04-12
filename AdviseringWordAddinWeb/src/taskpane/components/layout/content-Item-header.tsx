import React, { useState } from "react";
import { AccordionHeader, FluentProvider, mergeClasses } from "@fluentui/react-components";
import { makeStyles, tokens } from "@fluentui/react-components";
import { ChevronUpRegular, ChevronDownRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    contentHeader: {
        //borderRadius: tokens.borderRadiusMedium,
        backgroundColor: tokens.colorNeutralBackground5,
        '&:hover': {
            cursor: 'pointer',
        },
        display: "flex",
        columnGap: "20px",
    },
    contentHeaderIcon: {
        width: "25px",
        height: "25px",
        padding: "10px",
        '&:hover': {
            backgroundColor: tokens.colorBrandBackgroundSelected,
            color: "white"
        },
    },
    contentHeaderIconExpanded: {
        backgroundColor: tokens.colorBrandBackgroundSelected,
        color: "white",
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
    isExpanded: boolean;
}

const ContentItemHeader: React.FC<ContentItemHeaderProps> = ({ title, isExpanded }) => {
    const classes = useStyles();

    const [hover, setHover] = useState<boolean>(false);

    return (
        <FluentProvider theme={{
            spacingHorizontalMNudge: "0px",
            spacingHorizontalS: "0px",
        }}>
            <AccordionHeader
                expandIcon={isExpanded ?
                    <ChevronDownRegular className={mergeClasses(classes.contentHeaderIcon, classes.contentHeaderIconExpanded)} /> :
                    <ChevronUpRegular className={mergeClasses(classes.contentHeaderIcon, hover && classes.contentHeaderIconExpanded)} />}
                expandIconPosition="end"
                className={classes.contentHeader} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <div className={classes.contentHeaderLayout}>
                    {title}
                </div>
            </AccordionHeader>
        </FluentProvider>
    );
};

export default ContentItemHeader;