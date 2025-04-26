const calculateTag = document.querySelector('#calculate h1')
const resultTag = document.querySelector('#result h3')

const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const buttonTimes = document.getElementById('times')
const buttonDivide = document.getElementById('divide')

const defaultCalc = ['']
let calculate = ['']
function print() {
  calculateTag.innerHTML = calculate.reduce((result, current) => {
    return result + current
  }, '')

  let result = [...calculate]
  while (result.length > 1) {
    result.forEach((calc, index) => {
      if ([
        buttonTimes.innerHTML,
        buttonDivide.innerHTML,
      ].includes(calc)) {
        const value1 = result[index - 1]
        const value2 = result[index + 1]
        const value = calc === buttonTimes.innerHTML
          ? value1 * value2
          : value1 / value2
        result.splice(index - 1, 3, value)
        return
      }
    })
  }
  console.log(calculate)
  console.log(result)

  resultTag.innerHTML = result[0] ?? ''
}

function addCalculate(value) {
  const lastPos = calculate.length - 1
  const lastValue = calculate[lastPos]

  if ([
    buttonPlus.innerHTML,
    buttonMinus.innerHTML,
    buttonTimes.innerHTML,
    buttonDivide.innerHTML,
  ].includes(value)) {
    lastValue != '' && calculate.push(value, '')
    return
  }

  calculate.splice(lastPos, 1, lastValue + value)
}

const buttonNumbersElement = document.querySelectorAll('.btn-number')
Array.from([
  ...buttonNumbersElement,
  buttonPlus,
  buttonMinus,
  buttonTimes,
  buttonDivide,
]).forEach(btnElement => {
  btnElement.onclick = function () {
    const value = this.innerHTML
    console.log(`value: ${value}`)

    addCalculate(value)
    print()
  }
})

const buttonAllClear = document.getElementById('all-clear')
buttonAllClear.onclick = function () {
  calculate = ['']
  print()
}

const buttonLeftArrow = document.getElementById('larr')