

const dayInput = document.querySelector('.day-input')
const monthInput = document.querySelector('.month-input')
const yearInput = document.querySelector('.year-input')
const displayYear = document.querySelector('.display-year')
const displayMonth = document.querySelector('.display-month')
const displayDay = document.querySelector('.display-day')
const dateBox = document.querySelector('.date-box')
const box  = document.querySelector('.box ')

// const invalidDay  =document.querySelector('.valid-day')
// const invalidMonth = document.querySelector('.valid-month')
// // const fieldIsEmpty = document.querySelector('.error-empty')
// const invalidYear = document.querySelector('.valid-year')
// const invalidDate = document.querySelector('.valid-date')

// const dayBox = document.querySelector('.day-box')
// const monthBox = document.querySelector('.month-box')
// const yearBox  = document.querySelector('.year-box ')



dateBox.addEventListener('submit', e=>{
    e.preventDefault()
    validateAge()
})

function validateAge(){
    const dayInputValue = dayInput.value.trim()
    const monthInputValue = monthInput.value.trim()
    const yearInputValue = yearInput.value.trim()

    if(dayInputValue === ''){
        setErrorEmptyField(dayInput, 'This field is required')
    } else{
        setSuccess(dayInput)
    }


    if(monthInputValue === ''){
        setErrorEmptyField(monthInput, 'This field is required')
    } else{
        setSuccess(monthInput)
    }



    if(yearInputValue === ''){
        setErrorEmptyField(monthInput, 'This field is required')
    } else{
        setSuccess(monthInput)
    }

}


function setError(element, message){

    const box = element.parentElement
    const small = box.querySelector('small')
    small.innerHTML = message
    small.style.display = 'block'
    
    box.classList.add('input-error')
    box.classList.remove('input-success')

}

function setSuccess(element){
    const box = element.parentElement

    box.classList.remove('input-error')
    box.classList.add('input-success')
}



