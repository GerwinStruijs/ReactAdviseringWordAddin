//import React, { lazy, Suspense } from "react";
import Content from "../components/layout/content";

//const Content = lazy(() => import('../components/layout/content'));

export default function Body() {

    return (
        //<Suspense fallback={<p>Loading data...</p>}>
            <Content></Content>
        //</Suspense>
    );
};