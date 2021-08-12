const name = 'juan'
const age = 12
const sex = false

function foo(){
  const name = 'john'
  console.log(name)
  console.log(age)
}

function off(){
  const age = 12
}
foo()
console.log(name)

