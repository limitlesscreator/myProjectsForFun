console.log('working')
let a = 0
but = document.querySelector('.but')

let btnclass = 1
let pxtop = 10.3
let pxleft = 18.1

let value = 0;


function createbtn1() {
    const e = document.createElement('button')
    e.innerHTML = 'click me'
    e.className = `button${btnclass}`
    e.style.position = 'absolute'
    e.style.top = `${pxtop*15}px`
    e.style.left = `${pxleft*7}px`
    e.style.background = 'green'
    e.style.color = 'white'
    document.body.appendChild(e)
    pxtop++
    pxleft++
    btnclass++
    value++;
    if (value < 10) {
        setTimeout(createbtn1, 100);
    }
    if (value == 10){
        createbtn2()
    }

    console.log(value)
}


function createbtn2(){
    pxleft++
    pxtop--
    const e = document.createElement('button')
    e.innerHTML = 'click me'
    e.className = `button${btnclass}`
    e.style.position = 'absolute'
    e.style.top = `${pxtop*15}px`
    e.style.left = `${pxleft*7}px`
    e.style.background = 'green'
    e.style.color = 'white'
    document.body.appendChild(e)
    btnclass++
    value++;
    if (value < 21) {
        setTimeout(createbtn2, 100);
    }
    else if (value > 20 && value < 30){
        setTimeout(createbtn2, 100);
    }

    console.log(value)
}

but.onclick = function() {
    createbtn1()

};