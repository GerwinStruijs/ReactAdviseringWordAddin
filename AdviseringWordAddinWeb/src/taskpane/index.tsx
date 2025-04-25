import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { createRoot } from 'react-dom/client';
import App from './app.tsx';
import { AuthProvider } from './hooks/auth-provider.tsx';

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

Office.initialize = (reason) => {

    console.info("Office initialized with reason: ", reason);
    Office.addin.setStartupBehavior(Office.StartupBehavior.load);
};

Office.onReady(() => {
    console.info("Document onReady");      

    root?.render(
        <FluentProvider theme={webLightTheme}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </FluentProvider>
    );
});


