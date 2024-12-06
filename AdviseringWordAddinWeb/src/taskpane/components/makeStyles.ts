import { tokens, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        backgroundColor: tokens.colorNeutralBackground3,
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "30px",
        paddingTop: "100px",
        backgroundColor: tokens.colorNeutralBackground3,
    }, 
    header_message: {
        fontSize: tokens.fontSizeHero900,
        fontWeight: tokens.fontWeightRegular,
        fontColor: tokens.colorNeutralBackgroundStatic,
    },
    instructions: {
        fontWeight: tokens.fontWeightSemibold,
        marginTop: "20px",
        marginBottom: "10px",
    },
    textPromptAndInsertion: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textAreaField: {
        marginLeft: "20px",
        marginTop: "30px",
        marginBottom: "20px",
        marginRight: "20px",
        maxWidth: "50%",
    }
});