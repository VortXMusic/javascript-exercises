const convertToCelsius = function(farenheit) {
  let celsius=(farenheit-32)*(5/9);
  celsius = Math.round((celsius+Number.EPSILON)*10)/10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let farenheit=celsius*(9/5)+32;
  farenheit = Math.round((farenheit+Number.EPSILON)*10)/10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
