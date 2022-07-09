
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
        box.addEventListener('click', makeBlack)
    });
}

function makeBlack(box) {
    this.classList.add('clicked');
}

