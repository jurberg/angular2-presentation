import { provide } from 'angular2/core';
import { describe, expect, it, xit, inject, beforeEachProviders } from 'angular2/testing';
import { Phone } from './Phone';
import { PhoneService } from './PhoneService';
import { AppComponent } from './AppComponent';


class MockPhoneService {
    public phones:Phone[] = [];
}

describe('DisplayName', () => {

    beforeEachProviders(() => [
        provide(PhoneService,{useClass: MockPhoneService}),
        AppComponent
    ]);

    it('should have zero phones', inject([AppComponent], (appComponent) => {
        expect(appComponent.phones.length).toBe(0);
    }));

});
