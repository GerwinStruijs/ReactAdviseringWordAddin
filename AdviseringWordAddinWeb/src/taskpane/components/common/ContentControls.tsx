import { useEffect, useState } from "react";
import { getBookmarks, getContentControls, replaceBookmarks } from "../DocumentData";
import documentConfig from '../../config/Config.json';
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
const ContentControls: React.FC<BodyProps> = () => {

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
        {/*<div className={classes.documentControls}>*/}
        {/*    <div>Succesfully found {contentControls.length} controls</div>*/}
        {/*    <div>*/}
        {/*        <Table size="extra-small">*/}
        {/*            <TableHeader className={classes.controlsTableHeader}>*/}
        {/*                <TableRow>*/}
        {/*                    <TableCell>Control naam</TableCell>*/}
        {/*                    <TableCell>Control inhoud</TableCell>*/}
        {/*                </TableRow>*/}
        {/*            </TableHeader>*/}
        {/*            <TableBody>*/}
        {/*                {contentControls.map((contentControle) => (*/}
        {/*                    <TableRow>*/}
        {/*                        <TableCell>{contentControle.title}</TableCell>*/}
        {/*                        <TableCell>{contentControle.text}</TableCell>*/}
        {/*                    </TableRow>*/}
        {/*                ))}*/}
        {/*            </TableBody>*/}
        {/*        </Table>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>);
};

export default ContentControls;