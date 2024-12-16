export async function getBookmarks() {

    try {
        await Word.run(async (context) => {

            // Get the bookmarks collection from the document
            //const bookmarks = context.document.getBookmarkRangeOrNullObject("")

            // Load the items in the bookmarks collection
            //bookmarks.load('items');

            // Iterate through the bookmarks and log their names
            //bookmarks.items.forEach(function (bookmark) {
            //    console.log(bookmark.name);
            //});

            await context.sync();
        });
    } catch (error) {
        console.log("Error: " + error);
    }
}

export async function replaceBookmarks() { 
    
}