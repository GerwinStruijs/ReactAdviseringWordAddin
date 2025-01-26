import { bookmarkMap } from "../config/config";

/**
 * Retrieves bookmarks from the document and updates the component state.
 *
 * @param {bookmarkMap[]} bookmarkMapper - An array of bookmark maps.
 * @returns {Promise<string[]>} A promise that resolves to an array of bookmark names.
 */

export async function getBookmarks(bookmarkMapper: bookmarkMap[]): Promise<string[]> {
    // Initialize an empty array to store the bookmarks
    let bookmarks: { bookmarkName: string; bookmarkRange: Word.Range; }[] = [];

    // Run the Word API to retrieve the bookmarks
    await Word.run(async (context) => {
        // Loop through the mapper to find the bookmarks
        for (const bookmarkMap of bookmarkMapper) {
            // Get the bookmark
            const bookmarkRange: Word.Range = context.document.getBookmarkRangeOrNullObject(bookmarkMap.bookmarkName);
            bookmarkRange.load("isNullObject");

            // Add the bookmark to the array
            bookmarks.push({ bookmarkName: bookmarkMap.bookmarkName, bookmarkRange });
        }

        // Sync the context to ensure the changes are applied
        await context.sync();
    });

    // Filter out null objects
    bookmarks = bookmarks.filter(bookmark => !bookmark.bookmarkRange.isNullObject);

    // Return the array of bookmark names
    console.info(`Succesfully 'fetched' ${bookmarks.length} bookmarks.`, "getBookmarks");
    return bookmarks.map(bookmark => bookmark.bookmarkName);
}
