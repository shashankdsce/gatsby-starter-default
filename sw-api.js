// show a notification after 15 seconds (the notification
// permission must be granted first)
// setTimeout(() => {
//     self.registration.showNotification("Hello, world!")
// }, 15000)
    
workbox.routing.registerRoute(new RegExp('https://firestore\\.googleapis\\.com.*/'), new workbox.strategies.StaleWhileRevalidate());