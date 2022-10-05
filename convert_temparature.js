// Temparature today in kelvin
const kelvin = 0;

// Temparature today in Celsius
const celsius = kelvin - 273;

// Temparature today in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);