$(document).ready(function() {
  //only execute function function when the document is ready
  var thermostat = new Thermostat();
  // the following line is a jquery / CSS selector to use for classes , ids or HTML tags
  // this becomes refactored: $('#temperature').text(thermostat.temperature);
  //longhand for jquery selector:
  //$('element').on('event', function(){}) => event is the object to listen for on the page
  //examples of events : clicks, scrolls, typing (any page interaction)
  //$('element').click(function() {})
  updateTemperature();

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

});
//text is the event handler
//function is the callback
