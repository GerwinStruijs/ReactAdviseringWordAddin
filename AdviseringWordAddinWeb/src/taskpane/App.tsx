import Header from "./pages/header";
import { makeStyles } from "@fluentui/react-components";
import Body from "./pages/body";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh"
    }
});

export default function App() {
    const classes = useStyles();

    return (<div className={classes.root}>
            <Header logo="src/taskpane/assets/react.svg" title="Advisering Word Add-in" message="Welcome" />
            <Body />
        </div>
    )
}


