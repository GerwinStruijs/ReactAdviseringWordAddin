import { Accordion } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

import ContentItem from "./contentItem";
import WordProprtieList from "../specific/wordProprtiesList";
import WordControlList from "../specific/wordControlList";
import AdviesCaseList from "../specific/adviesCaseList";

const useStyles = makeStyles(
    {
        accordion: {
           
        }
    });

export default function Content() {

    const classes = useStyles();

    return (<Accordion className={classes.accordion} multiple collapsible>
                <ContentItem
                index={1}
                title="Document properties"
                content={<WordProprtieList />}
                />
                <ContentItem
                index={2}
                title="Document content"
                content={<WordControlList />}
                />
                <ContentItem
                index={3}
                title="Case details"
                content={<AdviesCaseList />}
                />
        </Accordion>
    );
};

