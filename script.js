let userIn = 16;
let picker = 'black';
let heightWidth = 600 / userIn;
let userInn = document.querySelector('#inputEl');
const draw = document.querySelector('#butt');
const container = document.querySelector('#container');


draw.addEventListener('click', () => {
    if(userInn.value && Number(userInn.value) > 0 && Number(userInn.value) < 51) {
        let val = Number(userInn.value);
        console.log(val);

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        heightWidth = 600/val;

        for (let i = 0; i < val; i++) {
            let bigD = document.createElement('div');
            bigD.style.display = `flex`;
            container.appendChild(bigD);
        
            for (let i = 0; i < val; i++){
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

    }

    else {
        alert('No negative values or numbers higher than 50 allowed!')
    }
    
    
})


for (let i = 0; i < userIn; i++) {
    let bigD = document.createElement('div');
    bigD.style.display = `flex`;
    container.appendChild(bigD);

    for (let i = 0; i < userIn; i++){
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