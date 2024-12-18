import bookmarkMap from '../../../config/BookmarkMap';

export async function getBookmarks(bookmarkMapper: bookmarkMap[]): Promise<Word.Range[]> {

    const bookmarks: Word.Range[] = [];

    try {

        await Word.run(async (context) => {

            // Replace the bookmarks with content controls
            bookmarkMapper.forEach(bookmarkMap => {

                // Get the bookmark range
                const bookmarkRange : Word.Range = context.document.getBookmarkRangeOrNullObject(bookmarkMap.bookmarkName);

                // Add the range to the array
                bookmarks.push(bookmarkRange);
            });
            
            await context.sync();
        });
        
    } catch (error) {
        console.log("Error: " + error);
    }

    return bookmarks;
}

export async function replaceBookmarks( bookmarkMapper : bookmarkMap[]) {

    try {

        await Word.run(async (context) => {

            // Replace the bookmarks with content controls
            bookmarkMapper.forEach(bookmarkMap => {

                // Get the bookmark range
                const bookmarkRange = context.document.getBookmarkRange(bookmarkMap.bookmarkName);

                // Insert the content control
                const contentControl = bookmarkRange.insertContentControl(Word.ContentControlType.richText);
                contentControl.tag = bookmarkMap.contentControlTag;
                contentControl.title = bookmarkMap.contentControlTitel;
                contentControl.cannotEdit = bookmarkMap.contentControlEditable;
                contentControl.cannotDelete = bookmarkMap.contentControlRemovable;

                // Delete the bookmark
                context.document.deleteBookmark(bookmarkMap.bookmarkName);
            });

            await context.sync();
        });
    } catch (error) {
        console.log("Error: " + error);
    }
}