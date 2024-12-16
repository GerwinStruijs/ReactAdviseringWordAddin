import { tokens, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "10px",
        paddingTop: "10px",
        backgroundColor: tokens.colorNeutralBackground3,
    },
    header_message: {
        fontSize: tokens.fontSizeHero700,
        fontWeight: tokens.fontWeightRegular,
        fontColor: tokens.colorNeutralBackgroundStatic,
    }
});