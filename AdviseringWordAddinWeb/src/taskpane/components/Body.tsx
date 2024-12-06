import * as React from "react";
import { useStyles } from "./makeStyles"
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@fluentui/react-components";
import TextInsertion from "./TextInsertion";
import { insertText } from "../insertText";

export interface BodyProps {
}

const Body: React.FC<BodyProps> = (props: BodyProps) => {

    const styles = useStyles();

    return (
        <Accordion collapsible>
            <AccordionItem value="1">
                <AccordionHeader>Insert tekst</AccordionHeader>
                <AccordionPanel>
                    <TextInsertion insertText={insertText} />
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionHeader>Accordion Header 2</AccordionHeader>
                <AccordionPanel>
                    <div>Accordion Panel 2</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="3">
                <AccordionHeader>Accordion Header 3</AccordionHeader>
                <AccordionPanel>
                    <div>Accordion Panel 3</div>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Body;