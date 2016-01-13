(function(app) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent, [app.PhoneService]);
    });

})(window.app || (window.app = {}));


