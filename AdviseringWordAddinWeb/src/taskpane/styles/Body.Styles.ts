import { tokens, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    accordion: {
    },
    accordionItem: {
    },
    accordionHeader: {
        backgroundColor: tokens.colorNeutralBackground3,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Hover,
        }
    },
    accordionHeaderChecked: {
        backgroundColor: tokens.colorNeutralBackground3Selected,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: tokens.colorNeutralBackground3Selected,
        }
    },
    instructions: {
        fontWeight: tokens.fontWeightSemibold,
        marginTop: "10px",
        marginBottom: "10px",
    },
    textPromptAndInsertion: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
    },
    textAreaField: {
        marginLeft: "0px",
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "0px",
        maxWidth: "100%",
    }
});