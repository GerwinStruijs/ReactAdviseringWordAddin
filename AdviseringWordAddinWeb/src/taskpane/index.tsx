import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { createRoot } from 'react-dom/client';
import documentConfig from './config/DocumentConfig.json';
import App from './modules/core/components/App.tsx';
import { getBookmarks, replaceBookmarks } from './modules/document/utils/Document.ts';

const title = "Advisering Word Add-in";

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Office onReady and initialize functions */
Office.initialize = (reason) => {
    console.log("Office initialized with reason: ", reason);
    Office.addin.setStartupBehavior(Office.StartupBehavior.load);
};

/* Render application after Office initializes */
Office.onReady((info) => {
    console.log("Document onReady");
    if (info.host === Office.HostType.Word) {
        Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onDocumentSelectionChanged);
    }

    const bookmarkMapper = documentConfig.bookmarkMapper;

    function onDocumentSelectionChanged(eventArgs: Office.AddinCommands.Event) {
        getBookmarks(bookmarkMapper).then(result => {
            replaceBookmarks(result, bookmarkMapper);
        });
    }

    root?.render(
        <FluentProvider theme={webLightTheme}>
            <App title={title} />
        </FluentProvider>
    );
});