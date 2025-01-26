import * as React from "react";
import { tokens, makeStyles, Image } from "@fluentui/react-components";

const useStyles = makeStyles({
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "10px",
        paddingTop: "10px"
    },
    header_message: {
        fontSize: tokens.fontSizeHero700,
        fontWeight: tokens.fontWeightRegular,
    }
});

export interface HeaderProps { title: string; logo: string; message: string; }
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const classes = useStyles();

    const { title, logo, message } = props;
    
    return (
        <section className={classes.header}>
            <Image width="40" height="40" src={logo} alt={title} />
            <h1 className={classes.header_message}>{message}</h1>
        </section>
    );
};

export default Header;