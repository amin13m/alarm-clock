

let b = document.querySelector('button');

let set = document.querySelectorAll('select');

let ring=new Audio("musics/alarm.mp3");

let opdiv = document.querySelector('.opdiv');

function h1(ob, se) {
    let t = ob;

    let j = 0;

    for (i = 0; i < t; i++) {

        let h = document.createElement('option');

        j++;

        set[se].appendChild(h);

        if (j > 9) {

            h.innerText = j;

        } else if (j <= 9) {
            h.innerText = "0" + j
        }


    }

}

h1(24, 0)

h1(60, 1)

let alarm

function d() {

    let d1 = document.querySelector('p')

    setInterval(() => {

        let d = new Date();

        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        if (s < 10) s = '0' + s
        if (m < 10) m = '0' + m
        if (h < 10) h = '0' + h

        d1.innerText = (`${h}:${m}:${s}`)
        
        if (alarm == `${h}:${m}`&& b.innerText=="clear alarm"){
            ring.play(); 
            ring.loop=true
            b.innerText="stop alarm"
        }


    }, 1000);

}

d()


b.addEventListener('click', () => {

    alarm = `${set[0].value}:${set[1].value}`;

    if (alarm.includes("hour") || alarm.includes("min")) return alert("select both options!");

    

    if(b.innerText=="set alarm"){
    opdiv.classList.add("disable")

    b.innerText="clear alarm"
    
    }else if(b.innerText=="stop alarm"||b.innerText=="clear alarm" ){

       opdiv.className="opdiv"

       b.innerText="set alarm"

       ring.pause()

    }
})