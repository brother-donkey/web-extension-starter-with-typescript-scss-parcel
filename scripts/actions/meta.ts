// lists meta data

interface completeMetaTag extends HTMLMetaElement {
    property: string;
}

const exclude = {
    "site_name": true,
    "ms.sitename": true,
    "search.ms_sitename": true,
    "word_count": true,
    "viewport": true,
    "description": true
};

export function initMetaList(): void {
    const metaCheck = document.querySelector('.meta-list-container') as HTMLElement;
    if (metaCheck) {
        const display = window.getComputedStyle(metaCheck).display === 'block';

        metaCheck.style.display = display ? 'none' : 'block';

        return;
    }

    const bodyElement = document.querySelector('body') as HTMLBodyElement;
    const metaTags = Array.from(document.querySelectorAll('meta')) as completeMetaTag[];

    let metaListHtml = `<section class="meta-list-container">
    <input id="meta-list-filter" placeholder="Filter metatags" />
    <ul>`;

    for (const tag of metaTags) {

        const identifier = tag.name || tag.property;

        if (identifier in exclude) {
            continue;
        }

        if (identifier) {
            metaListHtml += `<li class="meta-list-item">
            <p class="meta-name">${tag.name || tag.property}</p><p class="meta-content">${convertLinksToHtml(tag.content)}</p>
        </li>
        `}
    }

    metaListHtml += `</ul></section>`;

    bodyElement.insertAdjacentHTML('afterbegin', metaListHtml);

    const metaFilter = document.getElementById('meta-list-filter') as HTMLInputElement;
    metaFilter.focus();


    metaFilter.addEventListener('input', filterMetaList);
    metaFilter.addEventListener('change', filterMetaList);
}

function convertLinksToHtml(content: string): string {
    if (content.indexOf('http') != -1) {
        return `<a href="${content}">${content}</a>`
    } else {
        return content
    }
}

function filterMetaList(e: Event) {
    const metas = Array.from(document.querySelectorAll('.meta-list-item')) as HTMLLIElement[];
    const target = e.target;

    metas.forEach(meta => {
        const regexp = new RegExp((e.target as any).value);
        const metaText = meta.textContent as string;
        meta.hidden = !regexp.test(metaText);
    });
}

initMetaList();

