import Header from "./pages/Header";
import Body from "./pages/Body";

import { tokens, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        //backgroundColor: tokens.colorNeutralBackground5,
    }
});
interface AppProps { title: string; }
const App: React.FC<AppProps> = (props: AppProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header logo="src/taskpane/assets/react.svg" title={props.title} message="Welcome" />
            <Body />
        </div>
    )
}

export default App