
let size = 16;

drawGrid(size);



function drawGrid(size) {
    const grid = document.querySelector('.grid');

    for (i = 0; i < size; i++) {
        let line = document.createElement('div');
        line.classList.add('line');

        for (j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.classList.add('box')
            line.appendChild(column);
        }

        grid.appendChild(line);
    }

    addEventToBoxes()
}


function addEventToBoxes() {
    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.addEventListener('mousedown', makeBlack)
    });
}

function makeBlack(box) {
    this.classList.toggle('clicked');
}

function reset(){
    
    let newSize = prompt('Enter a grid size', 16)


    const lines = document.querySelectorAll('.line');

    lines.forEach(line => {
        line.remove();
    });

    drawGrid(newSize);
};

