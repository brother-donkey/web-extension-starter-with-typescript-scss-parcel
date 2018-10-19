export interface menuItemObject {
    name: string;
    description: string;
    module: string | any; // how to insert function here?
}

export type menuConfiguration = menuItemObject[];

export const menuConfig: menuConfiguration = [
    {
        name: 'Do stuff on the page',
        description: 'Code that runs in the context of the browser.',
        module: 'doStuffOnPage'
    }
];