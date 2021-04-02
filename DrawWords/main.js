// document.addEventListener("mousemove",
//     (event)=>console.log(b = "mousemove: "+event.clientX+", "+event
//     .clientY));





c = -2
document.addEventListener("mousedown", () => {
    console.log("MouseDown")
    document.addEventListener("mousemove", onMove);

    function onMove() {
        first = event.pageX
        second = event.pageY
        console.log(first, second)
        let p = document.createElement('div');

        p.className = 'vovan'
        p.style.position = 'absolute'
        p.style.left = first + 'px';
        p.style.top = second + 'px';
        p.innerHTML = 'Настя  ';
        p.style.zIndex = '99999';
        document.body.appendChild(p)
        let colors = ['#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff',
            '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040']
        // 24 элем
        c = c + 1
        if (c != 23) {
            p.style.color = colors[c]
        } else {
            c = -1
        }


    }



    // сверхуанимация


    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMove)
    });
})

