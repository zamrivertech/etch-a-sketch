const container = document.querySelector('.container');

let squares = prompt('Number of squares?', 42);

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


