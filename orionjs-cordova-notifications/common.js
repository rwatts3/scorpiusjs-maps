/**
 * Define the Orion Cordova Notifications Object
 * The Orion Cordova Notifications Object is Exported.
 */
orion.cordova.notifications = orion.cordova.notification || {}; //exported

/**
 * @property orion.cordova.notifications.config
 * @public
 */
orion.cordova.notifications.config = {
    notificationClient: new NotificationClient({
        senderId: orion.config.get('SenderID', 'key'),
        gcmAuthorization: orion.config.get('GCM API Key', 'secret')
    })
}


/**
 * @method orion.cordova.notifications.notify
 * @param title {String}
 * @param message {String}
 * @returns {*}
 *
 *  Sends Notification to Device
 */
orion.cordova.notifications.notify = function  (title, message) {
        return orion.cordova.notifications.config.notificationClient.sendNotification(this.userId, {
            title: title,
            message: message
        });
};

/**
 * @method orion.cordova.notifications.init
 * @public
 *
 * Adds Cordova to the Config Object
 * Registers the SenderID Field
 * Registers the GCM API Key Field.
 */
orion.cordova.notifications.init = function() {
    orion.config.add('SenderID', 'cordova')
    orion.config.add('GCM API Key', 'cordova', {secret: true})
};
