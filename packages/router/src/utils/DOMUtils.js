
export function getConfirmation(message, callback) {
    callback(window.confirm(message)); // eslint-disable-line no-alert
  }