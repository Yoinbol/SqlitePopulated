// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    window.sqlitePlugin.importPrepopulatedDatabase({ file: "Chinook.sqlite", "importIfExists": false });
    alert('Hola');
}