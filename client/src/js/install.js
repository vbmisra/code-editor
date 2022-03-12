const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event
    butInstall.classList.toggle('hidden', false)
});

// event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredPrompt

    if (!eventPrompt) {
        return
    }

    eventPrompt.prompt()

    window.deferredPrompt = null

    butInstall.classList.toggle('hidden', true)
});

// event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
