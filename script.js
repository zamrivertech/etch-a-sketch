const container = document.querySelector('.container');

const getSquares = document.querySelector('#squaresNum'); //64;// prompt('Number of squares?', 42);

getSquares.addEventListener('click', () => {

while (container.firstChild) {//this erases the whole container
    //please consolelog this code to understand how it works
    container.removeChild(container.firstChild);
}

let squares = prompt('Set number of squares?', 32);

if (squares > 100) {
    alert("Should be less or equal to 100!")
} else {

let drawable = false;

for (let i = 0; i < squares; i++) {   

let row = document.createElement('row');

row.classList.add('row');

container.appendChild(row);

    for (let j = 0; j < squares; j++) {

        let box = document.createElement('box');

        box.classList.add('box');

        row.appendChild(box);

        box.addEventListener ('pointerover', () => {

            if (drawable) {
                box.style.backgroundColor = 'black';
            }

        });

        box.addEventListener ('pointerdown', () => {

            drawable = true;

        });

        box.addEventListener ('pointerup', () => {

            drawable = false;

        });


    }


}

}

});
