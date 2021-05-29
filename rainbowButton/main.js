console.log('working')
let a = 0
but = document.querySelector('.but')

but.onclick = function() {
    for (let i = 1;i <= 10; i++){
        const e = document.createElement('button')
        e.innerHTML = 'click me'
        e.className = `button${i}`
        e.style.position = 'absolute'
        e.style.top = `${i*15}px`
        e.style.left = `${i*7}px`
        document.body.appendChild(e)
    }
    // for (let i = 10;i <= 20; i++){
    //     const e = document.createElement('button')
    //     e.innerHTML = 'click me'
    //     e.className = `button${i}`
    //     e.style.position = 'absolute'
    //     e.style.top = `${i*15}px`
    //     e.style.left = `${i*7}px`
    //     document.body.appendChild(e)
    // }
};