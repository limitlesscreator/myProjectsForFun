let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let num4 = document.querySelector('.num4')
let num5 = document.querySelector('.num5')
let num6 = document.querySelector('.num6')
let num7 = document.querySelector('.num7')
let num8 = document.querySelector('.num8')
let num9 = document.querySelector('.num9')

let whoWinner = document.querySelector('.winner')
let main = document.querySelector('.main')

let XorO = 0

num1Empty = 0
num2Empty = 0
num3Empty = 0
num4Empty = 0
num5Empty = 0
num6Empty = 0
num7Empty = 0
num8Empty = 0
num9Empty = 0

// const winner = () => {
//
// }


const answer = () => {
     if (num1.textContent === 'x' && num2.textContent === 'x' && num3.textContent === 'x'){
        num1.style.background = "red"
        num2.style.background = "red"
        num3.style.background = "red"
    }
    else if (num4.textContent === 'x' && num5.textContent === 'x' && num6.textContent === 'x'){
        num4.style.background = "red"
        num5.style.background = "red"
        num6.style.background = "red"
    }
    else if (num7.textContent === 'x' && num8.textContent === 'x' && num9.textContent === 'x'){
        num7.style.background = "red"
        num8.style.background = "red"
        num9.style.background = "red"
    }



    else if (num1.textContent === 'x' && num4.textContent === 'x' && num7.textContent === 'x'){
        num1.style.background = "red"
        num4.style.background = "red"
        num7.style.background = "red"
    }
    else if (num2.textContent === 'x' && num5.textContent === 'x' && num8.textContent === 'x'){
        num2.style.background = "red"
        num5.style.background = "red"
        num8.style.background = "red"
    }
    else if (num3.textContent === 'x' && num6.textContent === 'x' && num9.textContent === 'x'){
        num3.style.background = "red"
        num6.style.background = "red"
        num8.style.background = "red"
    }



    else if (num1.textContent === 'x' && num5.textContent === 'x' && num9.textContent === 'x'){
        num1.style.background = "red"
        num5.style.background = "red"
        num9.style.background = "red"
    }
    else if (num3.textContent === 'x' && num5.textContent === 'x' && num7.textContent === 'x'){
        num3.style.background = "red"
        num5.style.background = "red"
        num7.style.background = "red"
    }
     else if (num1.textContent === 'o' && num2.textContent === 'o' && num3.textContent === 'o'){
         num1.style.background = "red"
         num2.style.background = "red"
         num3.style.background = "red"
     }
     else if (num4.textContent === 'o' && num5.textContent === 'o' && num6.textContent === 'o'){
         num4.style.background = "red"
         num5.style.background = "red"
         num6.style.background = "red"
     }
     else if (num7.textContent === 'o' && num8.textContent === 'o' && num9.textContent === 'o'){
         num7.style.background = "red"
         num8.style.background = "red"
         num9.style.background = "red"
     }



     else if (num1.textContent === 'o' && num4.textContent === 'o' && num7.textContent === 'o'){
         num1.style.background = "red"
         num4.style.background = "red"
         num7.style.background = "red"
     }
     else if (num2.textContent === 'o' && num5.textContent === 'o' && num8.textContent === 'o'){
         num2.style.background = "red"
         num5.style.background = "red"
         num8.style.background = "red"
     }
     else if (num3.textContent === 'o' && num6.textContent === 'o' && num9.textContent === 'o'){
         num3.style.background = "red"
         num6.style.background = "red"
         num8.style.background = "red"
     }



     else if (num1.textContent === 'o' && num5.textContent === 'o' && num9.textContent === 'o'){
         num1.style.background = "red"
         num5.style.background = "red"
         num9.style.background = "red"
     }
     else if (num3.textContent === 'o' && num5.textContent === 'o' && num7.textContent === 'o'){
         num3.style.background = "red"
         num5.style.background = "red"
         num7.style.background = "red"
     }
}

const winner = () => {
    if (num1.textContent === 'x' && num2.textContent === 'x' && num3.textContent === 'x' ||
        num4.textContent === 'x' && num5.textContent === 'x' && num6.textContent === 'x' ||
        num7.textContent === 'x' && num8.textContent === 'x' && num9.textContent === 'x' ||

        num1.textContent === 'x' && num4.textContent === 'x' && num7.textContent === 'x' ||
        num2.textContent === 'x' && num5.textContent === 'x' && num8.textContent === 'x' ||
        num3.textContent === 'x' && num6.textContent === 'x' && num9.textContent === 'x' ||

        num1.textContent === 'x' && num5.textContent === 'x' && num9.textContent === 'x' ||
        num3.textContent === 'x' && num5.textContent === 'x' && num7.textContent === 'x'
    ){
        answer()
        whoWinner.innerHTML = 'winner player \'X\' :)'
        main.style.marginTop = '-46.55px'
    }
    else if (num1.textContent === 'o' && num2.textContent === 'o' && num3.textContent === 'o' ||
        num4.textContent === 'o' && num5.textContent === 'o' && num6.textContent === 'o' ||
        num7.textContent === 'o' && num8.textContent === 'o' && num9.textContent === 'o' ||

        num1.textContent === 'o' && num4.textContent === 'o' && num7.textContent === 'o' ||
        num2.textContent === 'o' && num5.textContent === 'o' && num8.textContent === 'o' ||
        num3.textContent === 'o' && num6.textContent === 'o' && num9.textContent === 'o' ||

        num1.textContent === 'o' && num5.textContent === 'o' && num9.textContent === 'o' ||
        num3.textContent === 'o' && num5.textContent === 'o' && num7.textContent === 'o'){
        answer()
        whoWinner.innerHTML = 'winner player \'O\' :)'
        main.style.marginTop = '-46.55px'
    }
}

num1.onclick = () => {
    console.log('1')

    if (XorO % 2 === 0 && num1Empty === 0){
        num1Empty++
        XorO++
        num1.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num1Empty === 0) {
        num1Empty++
        XorO++
        num1.innerHTML = '<div class="size">o</div>'
        winner()
    }

}
num2.onclick = () => {
    console.log('2')

    if (XorO % 2 === 0 && num2Empty === 0){
        num2Empty++
        XorO++
        num2.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num2Empty === 0) {
        num2Empty++
        XorO++
        num2.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num3.onclick = () => {
    console.log('3')

    if (XorO % 2 === 0 && num3Empty === 0){
        num3Empty++
        XorO++
        num3.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num3Empty === 0) {
        num3Empty++
        XorO++
        num3.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num4.onclick = () => {
    console.log('4')

    if (XorO % 2 === 0 && num4Empty === 0){
        num4Empty++
        XorO++
        num4.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num4Empty === 0) {
        num4Empty++
        XorO++
        num4.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num5.onclick = () => {
    console.log('5')

    if (XorO % 2 === 0 && num5Empty === 0){
        num5Empty++
        XorO++
        num5.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num5Empty === 0) {
        num5Empty++
        XorO++
        num5.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num6.onclick = () => {
    console.log('6')

    if (XorO % 2 === 0 && num6Empty === 0){
        num6Empty++
        XorO++
        num6.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num6Empty === 0) {
        num6Empty++
        XorO++
        num6.innerHTML = '<div class="size">o</div>'
        winner()
    }


}
num7.onclick = () => {
    console.log('7')

    if (XorO % 2 === 0 && num7Empty === 0){
        num7Empty++
        XorO++
        num7.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num7Empty === 0) {
        num7Empty++
        XorO++
        num7.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num8.onclick = () => {
    console.log('8')

    if (XorO % 2 === 0 && num8Empty === 0){
        num8Empty++
        XorO++
        num8.innerHTML = '<div class="size">x</div>'
        winner()
    }
    else if (XorO % 2 === 1 && num8Empty === 0) {
        num8Empty++
        XorO++
        num8.innerHTML = '<div class="size">o</div>'
        winner()
    }
}
num9.onclick = () => {
    console.log('9')

    if (XorO % 2 === 0 && num9Empty === 0){
        num9Empty++
        XorO++
        num9.innerHTML = '<div class="size">x</div>'
        winner()
        console.log(num1.textContent)
    }
    else if (XorO % 2 === 1 && num9Empty === 0) {
        num9Empty++
        XorO++
        num9.innerHTML = '<div class="size">o</div>'
        winner()
        console.log(num1.textContent)
    }

}


