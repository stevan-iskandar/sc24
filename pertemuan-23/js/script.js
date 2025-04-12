const calculateTag = document.querySelector('#calculate h1')
const resultTag = document.querySelector('#result h1')

let calculate = []
function print() {
  calculateTag.innerHTML = calculate.reduce((result, current) => {
    return result + current
  }, '')
}

function addCalculate(value) {
  const lastPos = calculate.length - 1
  const lastValue = calculate[lastPos]

  if (!lastValue) {
    calculate.push(value)
    return
  }

  calculate.splice(lastPos, 1, lastValue + value)
}

function btnNumber() {
  const value = this.innerHTML
  console.log(`value: ${value}`)

  addCalculate(value)
  print()
  console.log(calculate)
}

const buttonNumbersElement = document.querySelectorAll('.btn-number')

Array.from(buttonNumbersElement).forEach(btnElement => {
  btnElement.onclick = btnNumber
})

const buttonLeftArrow = document.getElementById('larr')