let opacity = 0;
let userIn = 16;
let picker = 'black';
let heightWidth = 600 / userIn;
let userInn = document.querySelector('#inputEl');
const draw = document.querySelector('#butt');
const rainbow = document.querySelector('#rainbow');
const container = document.querySelector('#container');
const mainMan = document.querySelector('#mainMan');

function getRandomRBG() {
    let numOne = Math.floor(Math.random() * 256);
    let numTwo = Math.floor(Math.random() * 256);
    let numThree = Math.floor(Math.random() * 256);
    return `rgb(${numOne}, ${numTwo}, ${numThree})`;
}

mainMan.addEventListener('click', (e) => {
    let valE = e.target;
    if (userInn.value && Number(userInn.value) > 0 && Number(userInn.value) < 51 && valE.id !== 'inputEl') {
        let val = Number(userInn.value);
        console.log(val);

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        heightWidth = 600 / val;

        for (let i = 0; i < val; i++) {
            let bigD = document.createElement('div');
            bigD.style.display = `flex`;
            container.appendChild(bigD);

            for (let i = 0; i < val; i++) {
                let div = document.createElement('div');
                div.classList.add('highlight');
                div.style.height = `${heightWidth}px`;
                div.style.width = `${heightWidth}px`;
                bigD.appendChild(div);

                let target = e.target;

                if (target.id == "butt") {

                    div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = 'black';
                    })

                }

                if (target.id == "rainbow") {

                    div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = getRandomRBG();
                    })

                }

                if (target.id == "darkening") {

                    div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = 'black';
                        div.style.opacity = opacity;
                        opacity += 0.1;
                        if (opacity == 0.9999999999999999) {
                            opacity = 0;
                        }
                        console.log(opacity);
                    })

                }

            }

        }

    }

    else if (valE.id == 'inputEl') {

    }

    else {
        alert('No negative values or numbers higher than 50 allowed!')
    }


})


for (let i = 0; i < userIn; i++) {
    let bigD = document.createElement('div');
    bigD.style.display = `flex`;
    container.appendChild(bigD);

    for (let i = 0; i < userIn; i++) {
        let div = document.createElement('div');
        div.classList.add('highlight');
        div.style.height = `${heightWidth}px`;
        div.style.width = `${heightWidth}px`;
        bigD.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }

}