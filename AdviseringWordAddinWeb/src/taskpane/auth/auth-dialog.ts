
let loginDialog: Office.Dialog;

export async function dialogFallback() {
        const url = "/auth-dialog.html";
        showLoginPopup(url);
}

function showLoginPopup(url: string) {
    const fullUrl = "https://localhost:60461" + url;

    Office.context.ui.displayDialogAsync(fullUrl, { height: 60, width: 30 }, function (result) {
        console.log("Dialog has initialized. Wiring up events");
        loginDialog = result.value;
        loginDialog.addEventHandler(Office.EventType.DialogMessageReceived, processMessage);
    });
}

async function processMessage(arg: any) {
   
    const messageFromDialog = JSON.parse(arg.message);

    if (messageFromDialog.status === "success") {
        loginDialog.close();
    } else if (messageFromDialog.error === undefined && messageFromDialog.result.errorCode === undefined) {
        // Need to pick the user to use to auth
    } else {
        // Something went wrong with authentication or the authorization of the web application.
        loginDialog.close();
        if (messageFromDialog.error) {
            console.error("Error in processMessage: " + JSON.stringify(messageFromDialog.error));
        } else if (messageFromDialog.result) {
            console.error("Error in processMessage: " + JSON.stringify(messageFromDialog.result.error));
        }
    }
}
