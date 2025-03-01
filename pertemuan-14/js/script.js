function onClick() {
  const text = document.getElementById('text')
  console.log(text)

  text.innerHTML = 'Hello World!'
}

const button = document.getElementById('button')
// button.onclick = onClick