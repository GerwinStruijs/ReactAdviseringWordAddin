import { bookmarkMap, contentControlMap, propertyMap } from "../config/config";

/**
 * Replaceses the bookmarks with content controls.
 *
 * @param {string[]} bookmarks - An array of bookmarks to be replaced.
 * @param {contentControlMap[]} contentControlMapper - An array of content control maps.
 */
export async function replaceBookmarks(bookmarks: string[], contentControlMapper: contentControlMap[]) {
    // Run the Word API to retrieve the bookmarks
    await Word.run(async (context) => {
        // Loop through the bookmarks
        bookmarks.forEach(bookmark => {
            // Get the bookmark
            const bookmarkRange: Word.Range = context.document.getBookmarkRange(bookmark);

            // get the bookmark map
            const bookmarkMap: bookmarkMap | undefined = contentControlMapper.find(contentControlMap => contentControlMap.bookmarkName === bookmark);
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
}

export async function getContentControls(contentControlMapper: contentControlMap[]): Promise<Word.ContentControl[]> {
    // Initialize an empty array to store the content controls
    let contentControls: Word.ContentControl[] = [];

    // Run the Word API to retrieve the content controls
    await Word.run(async (context) => {
        // Loop through the content controls
        contentControlMapper.forEach(contentControlMap => {
            // Get the content contro
            const contentControl: Word.ContentControl = context.document.contentControls.getByTag(contentControlMap.contentControlTag).getFirstOrNullObject();
            contentControl.load("tag,title,text");

            // Add the content control to the arrays
            contentControls.push(contentControl);
        });

        await context.sync();
    });

    // Filter out null objects
    contentControls = contentControls.filter(contentControl => contentControl.isNullObject !== true);

    // Return the array of content controls
    console.info(`Succesfully 'fetched' ${contentControls.length} content controls.`, "getContentControls");
    return contentControls;
}

/**
 * Retrieves custom properties from the document.
 *
 * @param {propertyMap[]} propertiesMapper - An array of property maps.
 * @returns {Promise<Word.CustomProperty[]>} A promise that resolves to an array of Word.CustomProperty objects.
 */
export async function getProperties(propertiesMapper: propertyMap[]): Promise<Word.CustomProperty[]> {
    // Initialize an empty array to store the custom proprties
    let customProperties: Word.CustomProperty[] = [];

    // Run the Word API to retrieve the customProperties
    await Word.run(async (context) => {
        // Loop through the mapper to find the proprties
        propertiesMapper.forEach(propertyMap => {
            // Get the custom property
            const customProperty: Word.CustomProperty = context.document.properties.customProperties.getItemOrNullObject(propertyMap.documentPropertyTag);
            customProperty.load("key,type,value");

            // Add the property to the array
            customProperties.push(customProperty);
        });

        // Sync the context to ensure the changes are applied
        await context.sync();
    });

    // Filter out null objects
    customProperties = customProperties.filter(property => property.isNullObject !== true);

    // Return the array of bookmarks
    console.info(`Succesfully 'fetched' ${customProperties.length} custom proprties.`, "getCustomProperties");
    return customProperties;
}