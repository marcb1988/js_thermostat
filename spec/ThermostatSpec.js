'use strict';

describe('thermostat', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new thermostat();
    });
    it('starts at 20 degrees', function () {
        expect(thermostat.temperature).toEqual(20);
    });
});