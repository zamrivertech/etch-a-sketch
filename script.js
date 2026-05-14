const container = document.querySelector('.container');

const getSquares = document.querySelector('#squaresNum'); //64;// prompt('Number of squares?', 42);

getSquares.addEventListener('click', () => {
    
let squares = prompt('Set number of squares?', 32);

if (squares > 100) {
    alert("Should be less or equal to 100!")
} else {

let drawable = false;

for (let i = 0; i < squares; i++) {

const row = document.createElement('row');

row.classList.add('row');

container.appendChild(row);

    for (let j = 0; j < squares; j++) {

        const box = document.createElement('box');

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
