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

  $('#temp-up').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

});
//text is the event handler
//function is the callback
