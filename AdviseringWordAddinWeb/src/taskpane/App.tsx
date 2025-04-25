import Header from "./pages/header";
import { makeStyles } from "@fluentui/react-components";
import Body from "./pages/body";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh"
    }
});
export default function App(title: string) {
    const classes = useStyles();

    return (<div className={classes.root}>
            <Header logo="src/taskpane/assets/react.svg" title={title} message="Welcome" />
            <Body />
        </div>
    )
}


