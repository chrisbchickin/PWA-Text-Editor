const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('before install listener');
    // Store the triggered events
    window.deferredPrompt = event;
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('click listener');
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app installed listener');
    // Clear prompt
    window.deferredPrompt = null;
  });
