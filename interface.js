$(document).ready(function () {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function () {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function () {
        thermostat.down();
        updateTemperature();
    });

    $('#temperature-reset').click(function () {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#psm-on').click(function () {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text('on')
        updateTemperature();
    });

    $('#psm-off').click(function () {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text('off')
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };
});