const person = {
  name: 'John',
  age: 38,
}

console.log('person.name :>> ', person.name)
console.log(`person['name'] :>> `, person['name'])
console.log('Object.keys(person) :>> ', Object.keys(person))

const demoDiv = document.getElementById('demo')
demoDiv.innerHTML = Object.keys(person).reduce((result, key) => {
  return result + key + person[key]
}, '')
