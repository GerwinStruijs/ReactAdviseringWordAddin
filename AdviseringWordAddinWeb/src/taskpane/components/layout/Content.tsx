﻿import { Accordion } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

import ContentItem from "./content-Item";
import { lazy } from "react";
import { useMsal } from "@azure/msal-react";

const useStyles = makeStyles(
    {
        accordion: {
           
        }
    });

export default function Content() {

    const classes = useStyles();

    const { instance } = useMsal();
    const account = instance.getActiveAccount();
    const userId: string = account?.localAccountId || "";

    const UserDataList = lazy(() => import("../specific/userDataList"));
    const WordPropertiesList = lazy(() => import("../specific/wordPropertiesList"));
    const WordControlList = lazy(() => import("../specific/wordControlList"));
    const AdviesCaseList = lazy(() => import("../specific/adviesCaseList"));

    return (<Accordion className={classes.accordion} multiple collapsible>
                <ContentItem
                index={1}
                title="User data "
                content={<UserDataList userId={userId} />}
                />
                <ContentItem
                index={2}
                title="Document properties"
                content={<WordPropertiesList />}
                />
                <ContentItem
                index={3}
                title="Document content"
                content={<WordControlList />}
                />
                <ContentItem
                index={4}
                title="Case details"
                content={<AdviesCaseList caseId="W01.01.00001" />}
                />
        </Accordion>
    );
};

