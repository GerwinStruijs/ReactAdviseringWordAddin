import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { createRoot } from 'react-dom/client';
import App from './modules/core/components/App.tsx';

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

    function onDocumentSelectionChanged(eventArgs: Office.AddinCommands.Event) {
        
    }

    root?.render(
        <FluentProvider theme={webLightTheme}>
            <App title={title} />
        </FluentProvider>
    );
});