import documentConfig from '../config/config.json';
import * as wordDocumentApi from "../api/word-document-api";
import * as documentTypes from '../types/document-types';

/**
 * Function to get custom properties from the Word document
 * @returns {Promise<DocumentProperty[]>} - Array of custom properties
 */
export async function getCustomProperties(): Promise<documentTypes.CustomProperty[]> {

    // Fetch custom properties using the API
    const customPropertyArray = await wordDocumentApi.getProperties(documentConfig.propertiesMapper);

    // Map the custom properties to the document properties format
    const customProperties = customPropertyArray.map(customProperty => {
        const propertyMap = documentConfig.propertiesMapper.find(propertyMap => propertyMap.customPropertyTag === customProperty.key);
        if (!propertyMap) {
            throw new Error(`Property map not found for custom property: ${customProperty.key}.`);
        }
        return { name: propertyMap.customPropertyName, tag: customProperty.key, property: customProperty };
    });

    console.info(`Succesfully 'procesed' ${customProperties.length} custom proprties.`, "getCustomProperties");
    return customProperties;
}

/**
 * Function to get content controls from the Word document
 * @returns {Promise<ContentControl[]>} - Array of content controls
 */
export async function getContentControls(): Promise<documentTypes.ContentControl[]> {

    // Fetch content controls using the API
    const contentControlArray = await wordDocumentApi.getContentControls(documentConfig.contentControlMapper);

    // Map the content controls to the document controls format
    const contentControls = contentControlArray.map(contentControl => {
        const contentControlMap = documentConfig.contentControlMapper.find(contentControlMap => contentControlMap.contentControlTag === contentControl.tag);
        if (!contentControlMap) {
            throw new Error(`Content control map not found for content control: ${contentControl.tag}.`);
        }
        return { name: contentControlMap.contentControlTitel, tag: contentControl.tag, property: contentControl };
    });

    console.info(`Succesfully 'procesed' ${contentControls.length} content controls.`, "getContentControls");
    return contentControls;
}