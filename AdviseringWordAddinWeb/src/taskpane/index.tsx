import { createRoot } from 'react-dom/client'
import App from './modules/core/components/App.tsx'
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const title = "Advisering Word Add-in";

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
    root?.render(
        <FluentProvider theme={webLightTheme}>
            <App title={title} />
        </FluentProvider>
    );
});