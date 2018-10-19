export function toggleFullScreen(): void {

    const list = (document.querySelector('html') as HTMLHtmlElement).classList;

    if (!list.contains('hasSidebar') || !list.contains('hasPageActions')) {
        list.add('hasSidebar');
        list.add('hasPageActions');
        (document.querySelector('#sidebar') as HTMLElement).hidden = false;
        return;
    }

    list.remove('hasSidebar');
    list.remove('hasPageActions');
    (document.querySelector('#sidebar') as HTMLElement).hidden = true;
}

toggleFullScreen();