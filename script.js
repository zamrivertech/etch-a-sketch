const container = document.querySelector('.container');

let squares = 42;

for (let i = 0; i < squares; i++) {

const row = document.createElement('row');

row.classList.add('row');

container.appendChild(row);

    for (let j = 0; j < squares; j++) {

        const box = document.createElement('box');

        box.classList.add('box');

        row.appendChild(box);

    }


}


