let c = document.getElementById('c')
let f = document.getElementById('f')
let h1 = document.getElementById('h1')
let CFinput = document.getElementById('CFinput')
let result = document.getElementById('result')
let Change = document.getElementById('Change')
let reset = document.getElementById('reset')
let Convert = document.getElementById('Convert')





Change.addEventListener('click', function () {
    if (c.innerHTML === 'C') {
        c.innerHTML = 'F'
        f.innerHTML = 'C'
        CFinput.placeholder = 'F'
    }
    else {
        c.innerHTML = 'C'
        f.innerHTML = 'F'
        CFinput.placeholder = 'C'
    }
})

reset.addEventListener('click', function () {
    result.innerHTML = ''
    CFinput.value = ''
})

Convert.addEventListener('click', function () {
    if (CFinput.value === '') {
        result.innerHTML = 'محتوای کادر خالی است'
        result.style.color = 'red'
    }
    else if (CFinput.placeholder === 'C') {
        let formol = CFinput.value * 9 / 5
        let finalFormol = formol + 32
        result.innerHTML = finalFormol.toFixed(2) + ('°F')
        result.style.color = 'green'
    }
    else if (CFinput.placeholder === 'F') {
        let formol = CFinput.value - 32
        let finalFormol = formol * 5 / 9
        result.innerHTML = finalFormol.toFixed(2) + ('°C')
        result.style.color = 'green'
    }
})

