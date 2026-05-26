const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('people')
const customTipInput = document.getElementById('customTip')

const tipButtons = document.querySelectorAll('.tip-btn')

const tipAmount = document.getElementById('tipAmount')
const grandTotal = document.getElementById('grandTotal')
const perPerson = document.getElementById('perPerson')

const billError = document.getElementById('billError')
const peopleError = document.getElementById('peopleError')
const tipError = document.getElementById('tipError')

const resetBtn = document.getElementById('resetBtn')

let selectedTip = 10

// TIP BUTTONS

tipButtons.forEach(button => {

    button.addEventListener('click', () => {

        // Remove active class from all buttons
        tipButtons.forEach(btn => {
            btn.classList.remove('active')
        })

        // Add active class
        button.classList.add('active')

        // Store selected tip
        selectedTip = Number(button.dataset.tip)

        // Clear custom tip input
        customTipInput.value = ''

        // Recalculate instantly
        calculate()
    })

})

// INPUT EVENTS

billInput.addEventListener('input', calculate)

peopleInput.addEventListener('input', calculate)

customTipInput.addEventListener('input', () => {

    // Remove active state from buttons
    tipButtons.forEach(btn => {
        btn.classList.remove('active')
    })

    calculate()
})

// CALCULATION FUNCTION

function calculate() {

    const bill = Number(billInput.value)

    const people = Number(peopleInput.value)

    let tipPercent

    // Use custom tip if entered
    if (customTipInput.value !== '') {

        tipPercent = Number(customTipInput.value)

    } else {

        tipPercent = selectedTip
    }

    // Clear errors

    billError.textContent = ''
    peopleError.textContent = ''
    tipError.textContent = ''

    // Validation

    let hasError = false

    if (bill <= 0 || isNaN(bill)) {

        billError.textContent = 'Enter valid bill amount'
        hasError = true
    }

    if (people < 1 || !Number.isInteger(people)) {

        peopleError.textContent = 'People must be at least 1'
        hasError = true
    }

    if (tipPercent < 0 || tipPercent > 100) {

        tipError.textContent = 'Tip must be between 0 and 100'
        hasError = true
    }

    // Stop if errors

    if (hasError) {

        tipAmount.textContent = 'Rs 0.00'
        grandTotal.textContent = 'Rs 0.00'
        perPerson.textContent = 'Rs 0.00'

        return
    }

    // Calculations

    const totalTip = (bill * tipPercent) / 100

    const totalAmount = bill + totalTip

    const eachPerson =
        Math.ceil((totalAmount / people) * 100) / 100

    // Display Results

    tipAmount.textContent =
        `Rs ${totalTip.toFixed(2)}`

    grandTotal.textContent =
        `Rs ${totalAmount.toFixed(2)}`

    perPerson.textContent =
        `Rs ${eachPerson.toFixed(2)}`
}

// RESET BUTTON

resetBtn.addEventListener('click', () => {

    billInput.value = ''
    peopleInput.value = 1
    customTipInput.value = ''

    selectedTip = 10

    tipButtons.forEach(btn => {
        btn.classList.remove('active')
    })

    tipButtons[0].classList.add('active')

    tipAmount.textContent = 'Rs 0.00'
    grandTotal.textContent = 'Rs 0.00'
    perPerson.textContent = 'Rs 0.00'

    billError.textContent = ''
    peopleError.textContent = ''
    tipError.textContent = ''
})

// Initial calculation

calculate()