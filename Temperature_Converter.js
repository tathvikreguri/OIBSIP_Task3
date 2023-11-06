function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale").value;
    let result;

    if (fromScale === "celsius") {
        if (toScale === "fahrenheit") {
            result = `${inputTemp}°C is equal to ${(inputTemp * 9) / 5 + 32}°F`;
        } else if (toScale === "kelvin") {
            result = `${inputTemp}°C is equal to ${inputTemp + 273.15}K`;
        } else {
            result = "Invalid conversion.";
        }
    } else if (fromScale === "fahrenheit") {
        if (toScale === "celsius") {
            result = `${inputTemp}°F is equal to ${((inputTemp - 32) * 5) / 9}°C`;
        } else if (toScale === "kelvin") {
            result = `${inputTemp}°F is equal to ${
        ((inputTemp - 32) * 5) / 9 + 273.15
      }K`;
        } else {
            result = "Invalid conversion.";
        }
    } else if (fromScale === "kelvin") {
        if (toScale === "celsius") {
            result = `${inputTemp}K is equal to ${inputTemp - 273.15}°C`;
        } else if (toScale === "fahrenheit") {
            result = `${inputTemp}K is equal to ${
        ((inputTemp - 273.15) * 9) / 5 + 32
      }°F`;
        } else {
            result = "Invalid conversion.";
        }
    } else {
        result = "Invalid conversion.";
    }

    document.getElementById("result").textContent = result;
}
