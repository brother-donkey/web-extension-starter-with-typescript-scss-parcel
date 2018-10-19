// this script runs in the browser after screenshot has run

function setScreenshotUrl(url: string) {
    const target = document.getElementById('target') as HTMLImageElement;
    if (target) {
        target.src = url;
    }
}

(window as any).setScreenshotUrl = setScreenshotUrl;

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    console.log(body);
    body.style.minWidth = '100vw';
});