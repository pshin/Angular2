(function (app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                template: '<h1>1. Choose type of your slider</h1>'
            })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));