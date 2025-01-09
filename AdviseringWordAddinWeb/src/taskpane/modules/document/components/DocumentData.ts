import bookmarkMap from '../../../config/BookmarkMap';
import propertyMap from "../../../config/PropertyMap";

/**
 * Retrieves bookmarks from the document and updates the component state.
 *
 * @param {bookmarkMap[]} bookmarkMapper - An array of bookmark maps.
 * @returns {Promise<Word.Range[]>} A promise that resolves to an array of Word.Range objects.
 */
export async function getBookmarks(bookmarkMapper: bookmarkMap[]): Promise<string[]> {
    // Initialize an empty array to store the bookmarks
    let bookmarks: { bookmarkName: string, bookmakrRange: Word.Range }[] = [];

    try {
        // Run the Word API to retrieve the bookmarks
        await Word.run(async (context) => {
            // Loop through the mapper to find the bookmarks
            bookmarkMapper.forEach(bookmarkMap => {
                // Get the bookmark
                const bookmarkRange: Word.Range = context.document.getBookmarkRangeOrNullObject(bookmarkMap.bookmarkName);

                // Add the bookmark to the array
                bookmarks.push({ bookmarkName: bookmarkMap.bookmarkName, bookmakrRange: bookmarkRange });
            });

            // Sync the context to ensure the changes are applied
            await context.sync();
        });

        // Filter out null objects
        bookmarks = bookmarks.filter(bookmark => bookmark.bookmakrRange.isNullObject !== true);
    } catch (error) {
        console.log("There was a error collecting the bookmarks, original error message: " + error);
    }

    // Return the array of bookmarks
    return bookmarks.map(bookmark => bookmark.bookmarkName);
}

/**
 * Retrieves bookmarks from the document and updates the component state.
 *
 * @param {bookmarkMap[]} bookmarkMapper - An array of bookmark maps.
 * @returns {Promise<Word.Range[]>} A promise that resolves to an array of Word.Range objects.
 */
export async function replaceBookmarks(bookmarks: string[], bookmarkMapper: bookmarkMap[]) {
    try {
        // Run the Word API to retrieve the bookmarks
        await Word.run(async (context) => {
            // Loop through the bookmarks
            bookmarks.forEach(bookmark => {
                // Get the bookmark
                const bookmarkRange: Word.Range = context.document.getBookmarkRange(bookmark);

                // get the bookmark map
                const bookmarkMap: bookmarkMap | undefined = bookmarkMapper.find(bookmarkMap => bookmarkMap.bookmarkName === bookmark);
                if (!bookmarkMap) {
                    throw new Error(`Bookmark map not found for bookmark: ${bookmark}`);
                }

                // Insert the content control
                const contentControl = bookmarkRange.insertContentControl(Word.ContentControlType.richText);
                contentControl.tag = bookmarkMap.contentControlTag;
                contentControl.title = bookmarkMap.contentControlTitel;
                contentControl.cannotEdit = bookmarkMap.contentControlEditable;
                contentControl.cannotDelete = bookmarkMap.contentControlRemovable;

                // Delete the bookmark
                context.document.deleteBookmark(bookmark);
            });

            await context.sync();
        });
    } catch (error) {
        console.log("There was a error replacing the bookmarks into contentcontrols, original error message: " + error);
    }
}

/**
 * Retrieves custom properties from the document.
 * 
 * @param {propertyMap[]} propertiesMapper - An array of property maps.
 * @returns {Promise<Word.CustomProperty[]>} A promise that resolves to an array of Word.CustomProperty objects.
 */
export async function getProperties(propertiesMapper: propertyMap[]): Promise<Word.CustomProperty[]> {

    // Initialize an empty array to store the custom proprties
    let properties: Word.CustomProperty[] = [];

    try {
        // Run the Word API to retrieve the customProperties
        await Word.run(async (context) => {
            // Loop through the mapper to find the proprties
            propertiesMapper.forEach(propertyMap => {
                // Get the custom property
                const customProperty: Word.CustomProperty = context.document.properties.customProperties.getItemOrNullObject(propertyMap.documentPropertyTag);
                //customProperty.load("key,type,value");

                // Add the property to the array
                properties.push(customProperty);
            });

            // Sync the context to ensure the changes are applied
            await context.sync();
        });

        // Filter out null objects
        properties = properties.filter(property => property.isNullObject !== true);
    } catch (error) {
        console.log("There was an error collecting the custom properties, original error message: " + error);
    }

    // Return the array of bookmarks
    return properties;
}