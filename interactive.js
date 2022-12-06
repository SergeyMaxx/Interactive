let  name = prompt('Как тебя зовут ?')
document.querySelector('h3').textContent = 'Привет ' + name
document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()

setInterval(() => {
  document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
}, 1000)

let colors = ['lightblue', 'lightgreen', 'coral', 'lightseagreen', 'orange']
let index = 0

document.querySelector('button').onclick = () => {
  document.body.style.background = colors[index] 
  index++
  if(index === colors.length) index = 0
}