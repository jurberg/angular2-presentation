describe('AppComponent', function() {

    var phoneService, appComponent;

    beforeEach(function() {
        phoneService = {
            phones: []
        };
        appComponent = new app.AppComponent(phoneService);
    });

    it("should have zero phones", function() {
        expect(appComponent.phones.length).toBe(0);
    });

    it("should have phones after adding one to the service", function() {
        phoneService.phones.push({'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'});
        expect(appComponent.phones.length).toBe(1);
    });

});