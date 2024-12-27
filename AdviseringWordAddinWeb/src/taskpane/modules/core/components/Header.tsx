import * as React from "react";
import { useStyles } from "../../../styles/Header.Styles"
import { Image } from "@fluentui/react-components";

export interface HeaderProps {
    title: string;
    logo: string;
    message: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { title, logo, message } = props;
    const styles = useStyles();

    return (
        <section className={styles.header}>
            <Image width="40" height="40" src={logo} alt={title} />
            <h1 className={styles.header_message}>{message}</h1>
        </section>
    );
};

export default Header;