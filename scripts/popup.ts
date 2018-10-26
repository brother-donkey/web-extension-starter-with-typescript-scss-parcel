// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

import { menuConfig, menuItemObject } from './shared';

const actionItemContainer = document.querySelector('.action-list') as HTMLDivElement;
const filterInput = document.querySelector('.filter') as HTMLInputElement;
let simulatedClick = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
}) as MouseEvent;

function buildMenu(parent: HTMLDivElement, menu: any) {

    menu.forEach((item: menuItemObject) => {
        const button: HTMLButtonElement = document.createElement('button');
        button.id = item.name.toLowerCase().replace(' ', '-');
        button.title = item.description;
        button.innerText = item.name;

        if (typeof item.module === 'string') {
            button.addEventListener('click', () => {
                chrome.tabs.executeScript(null,
                    { file: `scripts/doStuffOnPage.js` });
            });
        } else if (typeof item.module === 'function') {
            button.addEventListener('click', () => {
                item.module();
            });
        }

        parent.appendChild(button);
    });
}

buildMenu(actionItemContainer, menuConfig);

filterInput.addEventListener('input', filterAndUpdateVisibility);
filterInput.addEventListener('change', filterAndUpdateVisibility);

filterInput.addEventListener('keydown', (e: KeyboardEvent) => {

    if (e.keyCode === 13) {
        const chosen = actionItemContainer.firstElementChild as HTMLElement || undefined;
        if (chosen) {
            chosen.dispatchEvent(simulatedClick);
        }
    }
});

function filterAndUpdateVisibility(e: Event) {
    actionItemContainer.innerHTML = '';

    const target = e.target as HTMLInputElement;
    const regex = new RegExp(target.value.toLowerCase());

    const filteredMenuItems = menuConfig.filter((item: menuItemObject) => {
        return regex.test(item.name.toLowerCase());
    });

    buildMenu(actionItemContainer, filteredMenuItems);

    if (filteredMenuItems.length === 1) {
        const id = filteredMenuItems[0].name.toLowerCase().replace(' ', '-');
        const element = document.querySelector(`#${id}`) as HTMLButtonElement;
        if (element) {
            element.focus();
        }
    }
}