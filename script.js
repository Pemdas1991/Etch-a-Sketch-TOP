const grid = document.querySelector(`.grid`);

for (i = 0; i < 16; i++) {
    let line = document.createElement('div');
    line.classList.add('line');

    for (j = 0; j < 16; j++) {
        let column = document.createElement('div');
        column.classList.add('box')
        line.appendChild(column);
    }

    grid.appendChild(line);
}