function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let resultTemp;

    if (inputUnit === outputUnit) {
        resultTemp = inputTemp;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            resultTemp = (inputTemp * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            resultTemp = inputTemp + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            resultTemp = (inputTemp - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            resultTemp = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            resultTemp = inputTemp - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            resultTemp = (inputTemp - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('result').innerText = `Converted Temperature: ${resultTemp.toFixed(2)} ${outputUnit}`;
}
