document.addEventListener('DOMContentLoaded', function () {
    const matrixBg = document.createElement('div');
    matrixBg.classList.add('matrix-bg');
    document.body.appendChild(matrixBg);

    const rows = 30;
    const cols = 30;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const matrixElement = document.createElement('span');
            matrixElement.classList.add('matrix-element');
            matrixElement.style.left = `${j * (100 / cols)}%`;
            matrixElement.style.top = `${i * (100 / rows)}%`;
            matrixBg.appendChild(matrixElement);
        }
    }
});
