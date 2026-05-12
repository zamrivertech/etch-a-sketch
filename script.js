const container = document.querySelector(".container");

//try only with row

const squares = 5;

for (let i = 0; i < squares; i++) {

const size = squares * 2 + 8;    

const row = document.createElement("div");

row.classList.add('row');

container.appendChild(row);

for (let j = 0; j < squares; j++) {

    const box = document.createElement("div");

    box.classList.add('box');

    row.appendChild(box);  


} 



}