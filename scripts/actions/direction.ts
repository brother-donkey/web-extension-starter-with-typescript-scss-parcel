
export function toggleRtl(): void {

    const dirs = Array.from(document.querySelectorAll('[dir]'));
    console.log(dirs);

    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i].getAttribute('dir') === 'ltr') {
            dirs[i].setAttribute('dir', 'rtl');
        } else {
            dirs[i].setAttribute('dir', 'ltr');
        }
    }
}

toggleRtl();