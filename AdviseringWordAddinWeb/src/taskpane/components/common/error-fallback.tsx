import React from "react";
import { makeStyles, MessageBar, MessageBarBody, MessageBarIntent, MessageBarTitle } from "@fluentui/react-components";
import { FallbackProps } from "react-error-boundary";

const useStyles = makeStyles({
    container: {
        paddingTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
});

const intent: MessageBarIntent = "error";

const ErrorFallback: React.FC<FallbackProps> = ({ error}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MessageBar key={intent} intent={intent}>
                    <MessageBarBody>
                    <MessageBarTitle>Er is een fout opgetreden: </MessageBarTitle>
                        {error.message}
                    </MessageBarBody>
                </MessageBar>
        </div>
    );
};

export default ErrorFallback;