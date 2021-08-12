'use strict';
const helloBtn = document.getElementById('hello-btn')
const helloBtn2 = document.getElementById('hello-btn2')
console.log(this);

function hey(ev){
  console.log(this)
}

function wth(){
  console.log(this)
}
//wth()

const arrow = () => {
  console.log(this)
}
//arrow()


helloBtn.addEventListener('click', () => {
  console.log(this)
})
helloBtn2.addEventListener('click', function() {
  console.log(this)
})


