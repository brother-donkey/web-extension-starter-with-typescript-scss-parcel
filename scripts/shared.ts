export interface menuItemObject {
    name: string;
    description: string;
    module: string | any; // how to insert function here?
}

export type menuConfiguration = menuItemObject[];


/*
How to extend this: npm run extend

* Explanation *

** Part One **

Add your menuConfiguration Object into the array below.
- name: Name to display in popup
- description: Tooltip / HTML title attribute
- module: Exact name of the TS file created in actions/, without .ts extension || function

Note: in rare cases where you want to use the chrome API, the module value should be a callback function (see "screenshot").

** Part Two **

Place script file to load in the page's environment in the src/scripts/actions folder.

*/

export const menuConfig: menuConfiguration = [
    {
        name: 'Repo',
        description: 'Go to Content Repo',
        module: 'repo'
    },
    {
        name: 'Fullscreen',
        description: 'Remove ancillary elements to view the full screen version of this page. Great for presenting.',
        module: 'fullscreen'
    },
    {
        name: 'Theme',
        description: 'Toggle from Light <=> Dark theme',
        module: 'theme'
    },
    {
        name: 'Direction',
        description: 'Toggle left to right and right to left. Note: this is minorly different from true right to left.',
        module: 'direction'
    },
    {
        name: 'Event listener',
        description: 'Adds Event Listener to Window. Takes one event type option.',
        module: 'event'
    },
    {
        name: 'List metadata',
        description: 'Lists the active metadata on the page.',
        module: 'meta'
    }
];