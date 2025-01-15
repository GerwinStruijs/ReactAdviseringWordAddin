import { useEffect, useState } from "react";
import { getBookmarks, getContentControls, replaceBookmarks } from "../../api/wordDocument";
import documentConfig from '../../config/config.json';
import { makeStyles, List, ListItem } from "@fluentui/react-components";

const useStyles = makeStyles(
    {
        controls: {
            padding: '10px',
        },
        controlsList: {},
        controlsListItem: { padding: '5px' },
        controlsListItemHeader: {
            fontWeight: '500'
        },
    });

export type BodyProps = unknown
const WordControlList: React.FC<BodyProps> = () => {

    const classes = useStyles();

    const [contentControls, setContentControls] = useState<Word.ContentControl[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const bookmarks = await getBookmarks(documentConfig.contentControlMapper);
            if (bookmarks.length !== 0) {
                await replaceBookmarks(bookmarks, documentConfig.contentControlMapper);
                console.info("Succesfully found and replaced {} bookmarks into content controls.", bookmarks.length, "replaceBookmarks");
            }
            
            const contentControls = await getContentControls(documentConfig.contentControlMapper);
            console.info("Succesfully found {} content controls", contentControls.length, "getContentControls");
            setContentControls(contentControls);     
        };

        fetchData();
    }, []);

    return (<div>
        <div className={classes.controls}>
            <div>
                <List className={classes.controlsList} navigationMode="items">
                    {contentControls.map((contentControl) => (
                        <ListItem key={contentControl.tag}>
                            <div className={classes.controlsListItem}>
                                <div className={classes.controlsListItemHeader}>
                                    {contentControl.title}
                                </div>
                                <div>
                                    {contentControl.text}
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    </div>);
};

export default WordControlList;