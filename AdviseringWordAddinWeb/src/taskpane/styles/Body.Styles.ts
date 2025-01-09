import { tokens, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    
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