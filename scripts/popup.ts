// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

import { menuConfig, menuItemObject } from './shared';
import { hostname } from 'os';

const panel = document.querySelector('.panel') as HTMLDivElement;
const filterInput = document.querySelector('.filter') as HTMLInputElement;
let simulatedClick = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
}) as MouseEvent;

const config = {
    title: "Browser Extension"
}

function buildMenu(parent: HTMLDivElement, menu: any) {

    menu.forEach((item: menuItemObject) => {
        const div: HTMLDivElement = document.createElement('div');
        div.id = item.name.toLowerCase().replace(/\s/g, '-');
        div.title = item.description;
        div.classList.add('panel-block');
        div.classList.add('is-paddingless');

        const button: HTMLButtonElement = document.createElement('button');
        button.classList.add('button')
        button.classList.add('is-marginless');
        button.classList.add('is-text');
        button.classList.add('is-fullwidth');
        button.innerHTML = `
            <span class="panel-icon" >
                <i class="fas fa-${item.icon}" aria-hidden="true"></i>
            </span><span>${item.name}<span>
        `;

        div.appendChild(button);
        parent.appendChild(div);

        if (typeof item.module === 'string') {
            button.addEventListener('click', () => {
                if (hostname) {
                    chrome.tabs.executeScript(null, { file: `scripts/${item.module}.js` }, result => {
                        const lastErr = chrome.runtime.lastError;
                        if (lastErr) console.log('lastError: ' + JSON.stringify(lastErr));
                    });
                }
            });
        }
    });
}

buildMenu(panel, menuConfig);

filterInput.addEventListener('input', filterAndUpdateVisibility);
filterInput.addEventListener('change', filterAndUpdateVisibility);

filterInput.addEventListener('keydown', (e: KeyboardEvent) => {

    if (e.keyCode === 13) {
        const chosen = panel.firstElementChild as HTMLElement || undefined;
        if (chosen) {
            chosen.dispatchEvent(simulatedClick);
        }
    }
});

function filterAndUpdateVisibility(e: Event) {
    const panelBlocks = Array.from(document.querySelectorAll(`.panel-block:not(.input-container)`)) as HTMLDivElement[];
    console.log(panelBlocks);

    const target = e.target as HTMLInputElement;
    const regex = new RegExp(target.value.toLowerCase(), 'g');

    const filteredPanels = panelBlocks.filter((block: HTMLDivElement) => {
        const idText = block.id.replace('-', ' ');
        const matchesTerm = regex.test(idText.toLowerCase());

        if (!matchesTerm) {
            block.hidden = true;
        } else {
            block.hidden = false;
        }

        return matchesTerm;
    });

    if (filteredPanels.length === 1) {
        if (filteredPanels[0]) {
            filteredPanels[0].focus();
        }
    }
}