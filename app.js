window.addEventListener('load', e => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js')
      console.log('SW registered');
    } catch {
console.log('Sw FAILED');
    }
  }
})
