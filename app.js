
// VARIABLE DECLARATIONS===============================================
const dayInput = document.querySelector('.day-input')
const monthInput = document.querySelector('.month-input')
const yearInput = document.querySelector('.year-input')

const displayYear = document.querySelector('.display-year')
const displayMonth = document.querySelector('.display-month')
const displayDay = document.querySelector('.display-day')
const submitBtn = document.querySelector('.submit')
const yearBox  = document.querySelector('.year-box ')
const monthBox  = document.querySelector('.month-box ')
const dayBox  = document.querySelector('.day-box ')

const invalidDay  =document.querySelector('.valid-day')
const invalidMonth = document.querySelector('.valid-month')
const invalidYear = document.querySelector('.valid-year')



let isValid = false

// DAY INPUT EVENTLISTENER===============================================
dayInput.addEventListener('input', e=>{
    if (+dayInput.value > 31){
        invalidDay.innerHTML = 'Must be a valid day'
        dayBox.classList.add('error')
        dayBox.classList.add('title-error')
        isValid = false

        return
    }

    if(+dayInput.value === 0){
        isValid = false
        invalidDay.innerHTML = 'This field is required'
        dayBox.classList.add('error')
        dayBox.classList.add('title-error')
        isValid = false

        return
    }
    else{
        invalidDay.innerHTML = ''
        dayBox.classList.remove('error')
        dayBox.classList.remove('title-error')
        isValid = true
    }
})


// MONTH INPUT EVENTLISTENER===============================================
monthInput.addEventListener('input', e=>{
    if (+monthInput.value > 12){
        invalidMonth.innerHTML = 'Must be a valid month'
        monthBox.classList.add('error')
        monthBox.classList.add('title-error')
        isValid = false

        return
    }

    if(+monthInput.value === 0){
        isValid = false
        invalidMonth.innerHTML = 'This field is required'
        monthBox.classList.add('error')
        monthBox.classList.add('title-error')
        isValid = false

        return
    }
    else{
        invalidMonth.innerHTML = ''
        monthBox.classList.remove('error')
        monthBox.classList.remove('title-error')
        isValid = true
    }
})

// YEAR INPUT EVENTLISTENER===============================================
yearInput.addEventListener('input', e=>{
    if (+yearInput.value > 2023){
        invalidYear.innerHTML = 'Must be a valid year'
        yearBox.classList.add('error')
        yearBox.classList.add('title-error')
        isValid = false

        return
    }

    if(+yearInput.value === 0){
        isValid = false
        invalidYear.innerHTML = 'This field is required'
        yearBox.classList.add('error')
        yearBox.classList.add('title-error')
        isValid = false

        return
    }
    else{
        invalidYear.innerHTML = ''
        yearBox.classList.remove('error')
        yearBox.classList.remove('title-error')
        isValid = true
    }
})

// SUBMIT BUTTON EVENTLISTENER===============================================

submitBtn.addEventListener('click', calculateDate)


function calculateDate(){
    let birthday = `${monthInput.value}/ ${dayInput.value}/${yearInput.value}`
    let birthdayObj = new Date(birthday)
    let ageDiff = Date.now() - birthdayObj
    let ageDate = new Date(ageDiff)
    let ageYear = ageDate.getUTCFullYear() - 1970
    let ageMonth = ageDate.getUTCMonth()
    let ageDay = ageDate.getUTCDay() - 1

    displayYear.innerHTML = ageYear
    displayMonth.innerHTML = ageMonth
    displayDay.innerHTML = ageDay
}



