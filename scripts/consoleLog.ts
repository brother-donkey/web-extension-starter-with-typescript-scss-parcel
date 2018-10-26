
export function consoleLog(): void {

    console.log('***this will run in the context of the browser, not the extension.***')
}

consoleLog();