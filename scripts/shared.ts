export interface menuItemObject {
    name: string;
    description: string;
    module: string | any; // how to insert function here?
    icon: string;
}

export type menuConfiguration = menuItemObject[];

export const menuConfig: menuConfiguration = [
    {
        name: 'ConsoleLog',
        description: 'Code that runs in the context of the browser.',
        module: 'consoleLog',
        icon: 'random'
    },
    // extend here - do not delete this line
];
