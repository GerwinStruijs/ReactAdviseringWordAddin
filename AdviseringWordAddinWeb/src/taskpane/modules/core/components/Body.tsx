    import * as React from "react";
    import { useStyles } from "../../../styles/Body.Styles"
    import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, mergeClasses } from "@fluentui/react-components";
    import Document from "../../document/components/Document";

    export type BodyProps = unknown

    const Body: React.FC<BodyProps> = () => {

        const [selectedItem, setselectedItem] = React.useState(0);

        const styles = useStyles();

        return (
            <Accordion className={styles.accordion} collapsible>
                <AccordionItem value="1" onClick={() => setselectedItem(1)}>
                    <AccordionHeader className={mergeClasses(styles.accordionHeader, selectedItem == 1 && styles.accordionHeaderChecked)}>Initialize document</AccordionHeader>
                    <AccordionPanel>
                        <Document></Document>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="2" onClick={() => setselectedItem(2)} >
                    <AccordionHeader className={mergeClasses(styles.accordionHeader, selectedItem == 2 && styles.accordionHeaderChecked)}>Accordion Header 2</AccordionHeader>
                    <AccordionPanel>
                        <div>Accordion Panel 2</div>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="3" onClick={() => setselectedItem(3)}>
                    <AccordionHeader className={mergeClasses(styles.accordionHeader, selectedItem == 3 && styles.accordionHeaderChecked)}>Accordion Header 3</AccordionHeader>
                    <AccordionPanel>
                        <div>Accordion Panel 3</div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        );
    };

    export default Body;