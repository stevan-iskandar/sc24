const calculateTag = document.querySelector('#calculate h1')

function btnNumber() {
  const value = parseInt(this.innerHTML)
  console.log(value)
  calculateTag.innerHTML += value
}

const buttonNumbersElement = document.querySelectorAll('.btn-number')

Array.from(buttonNumbersElement).forEach(btnElement => {
  btnElement.onclick = btnNumber
})