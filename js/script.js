document.addEventListener('DOMContentLoaded', (event) => {
    const celciusInput = document.getElementById('celcius-input');
    const fahrenheitOutput = document.getElementById('fahrenheit-output');
    const calculationOutput = document.getElementById('calculation-output');

    const convertButton = document.getElementById('convert-button');
    const resetButton = document.getElementById('reset-button');
    const reverseButton = document.getElementById('reverse-button');

    let isCelciusToFahrenheit = true;

    const convertTemperature = () => {
        let inputValue = parseFloat(celciusInput.value);

        if (isNaN(inputValue)) {
            alert("Mohon masukkan angka yang valid");
            return;
        }

        if (isCelciusToFahrenheit) {
            let fahrenheit = (inputValue * 9 / 5) + 32;
            fahrenheitOutput.value = fahrenheit.toFixed(2);
            calculationOutput.value = `${inputValue}°C = (${inputValue} * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        } else {
            let celcius = (inputValue - 32) * 5 / 9;
            fahrenheitOutput.value = celcius.toFixed(2);
            calculationOutput.value = `${inputValue}°F = (${inputValue} - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
        }
    };

    const resetInputs = () => {
        celciusInput.value = '';
        fahrenheitOutput.value = '';
        calculationOutput.value = '';
    };

    const reverseConversion = () => {
        isCelciusToFahrenheit = !isCelciusToFahrenheit;
        resetInputs();
        if (isCelciusToFahrenheit) {
            document.querySelector('.celcius-container header h3').textContent = 'Celcius (°C)';
            document.querySelector('.result-container header h3').textContent = 'Fahrenheit (°F)';
            document.querySelector('label[for="celcius-input"]').textContent = 'Celcius:';
            document.querySelector('label[for="fahrenheit-output"]').textContent = 'Fahrenheit:';
        } else {
            document.querySelector('.celcius-container header h3').textContent = 'Fahrenheit (°F)';
            document.querySelector('.result-container header h3').textContent = 'Celcius (°C)';
            document.querySelector('label[for="celcius-input"]').textContent = 'Fahrenheit:';
            document.querySelector('label[for="fahrenheit-output"]').textContent = 'Celcius:';
        }
    };

    convertButton.addEventListener('click', convertTemperature);
    resetButton.addEventListener('click', resetInputs);
    reverseButton.addEventListener('click', reverseConversion);
});