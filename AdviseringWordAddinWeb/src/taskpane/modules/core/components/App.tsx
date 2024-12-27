import { useStyles } from "../../../styles/App.Styles"
import Header from "./Header";
import Body from "./Body";

interface AppProps {
    title: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Header logo="src/taskpane/assets/react.svg" title={props.title} message="Welcome" />
            <Body />
        </div>
    )
}

export default App