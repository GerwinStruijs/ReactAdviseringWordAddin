import { useState } from 'react'
import Header from "./Header";
import { makeStyles } from "@fluentui/react-components";
import './App.css'

interface AppProps {
    title: string;
}

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    },
});

const App: React.FC<AppProps> = (props: AppProps) => {

    const styles = useStyles();

  return (
      <div className={styles.root}>
          <div>
                 <Header logo="assets/react.svg" title={props.title} message="Welcome" />
          </div>
    </div>
  )
}

export default App
