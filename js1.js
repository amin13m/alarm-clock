/*
let d =document.getElementsByTagName("div");

for(i=0;i<d.length;i++){
    console.log(d[i]);
}
*/

//let a = document.getElementsByTagName("p")

//console.log(a)

//let c = document.children

/*
let a2 = document.querySelector('h1')

let paragraph = document.querySelector('button')

paragraph.innerText ='hi'

paragraph.style.fontSize='40px'

paragraph.setAttribute('onClick','a2.innertext = "gd"')

let b = function(){document.body.appendChild(paragraph);
    alert('hoh');
   
}

//document.querySelector('p').setAttribute('href','C:/Users/AMIN/Documents/newsite/a1.html')

function a1() {
    document.querySelector('body').setAttribute('style','backgroundColor: blue');
}

a1()

*/

/*
function u(a=10) {


    for (i = 0; i < a; i++) {

        let p = document.createElement('p');

        let br = document.createElement('br');

        p.innerText = 'test';

        p.classList.add('style')

        let div = document.querySelector('div');

        div.appendChild(br);

        div.appendChild(p);
    }
}


u(5)

*/




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