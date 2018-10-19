
function changeTheme(): void {
    const list = (document.querySelector('html') as HTMLHtmlElement).classList;

    if (list.contains('theme_night')) {
        list.remove('theme_night');
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'theme_night');
        list.add('theme_night')
    }
}

changeTheme();