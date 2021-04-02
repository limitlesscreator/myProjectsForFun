
let button = document.getElementById('btn-right')
button.onclick = function(){
    let c = -1

    function news() {
        for (let i=0; i<48; i++) {
            setTimeout( function timer(){

                let parent = document.querySelector('#parent');
                let p = document.createElement('a');
                p.innerHTML = 'Sanyad';
                // сверху ввод дивки
                p.className = 'vovan'
                // сверху касс


                rastoyanie = i * 10 / 5
                rastoyanie = String(rastoyanie)
                p.style.marginTop = rastoyanie + "px";
                p.style.marginLeft = rastoyanie + "px";
                // сверху каждый отступ
                let colors = ['#ff0808','#ff0862','#ff089c','#ff08f7','#ce08ff','#8308ff','#3908ff','#0820ff','#087bff','#08e2ff','#08ffe2','#08ff98','#08ff3d','#0cff08','#66ff08','#94ff08','#deff08','#ffc908','#ff6208','#ff0808',
                    '#ff0808','#ff0862','#ff089c','#ff08f7','#ce08ff','#8308ff','#3908ff','#0820ff','#087bff','#08e2ff','#08ffe2','#08ff98','#08ff3d','#0cff08','#66ff08','#94ff08','#deff08','#ffc908','#ff6208','#ff0808',
                    '#ff0808','#ff0862','#ff089c','#ff08f7','#ce08ff','#8308ff','#3908ff','#0820ff','#087bff','#08e2ff','#08ffe2','#08ff98','#08ff3d','#0cff08','#66ff08','#94ff08','#deff08','#ffc908','#ff6208','#ff0808',]
                 c = c + 1
                p.style.color = colors[c]

                // сверху цвет
                parent.appendChild(p);

                console.log(rastoyanie)

                //отступ сверху

                // alert("hello world");
            }, i*50 );
            // сверху частота появления
        }

    }

    news()
}


// setInterval(news, 10000)


