import { convert } from "./converter.js"

const $inputCurrency = document.querySelector('.js-input-currency')
const $selectCurrency = document.querySelector('#js-select-currency')
const $output = document.querySelector('.js-output')

$inputCurrency.addEventListener('input', function() {
    const rub = Number($inputCurrency.value)
    const currency = String($selectCurrency.value)
    const result = convert(rub, currency)
    console.log(result);
})