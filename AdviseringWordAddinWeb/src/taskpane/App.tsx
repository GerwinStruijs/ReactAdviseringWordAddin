import Header from "./pages/header";
import { makeStyles } from "@fluentui/react-components";
import Body from "./pages/body";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh"
    }
});
interface AuthProviderProps { title: string; }

const App = ({ title }: AuthProviderProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header logo="src/taskpane/assets/react.svg" title={title} message="Welcome" />
            <Body />
        </div>
    )
}

export default App;
