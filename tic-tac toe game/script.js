let currentplayer = "X";

let array = Array(9).fill(null);

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (array[a] === array[b] && array[a] === array[c] && array[a] !== null) {
            return true;
        }
    }
    return false;
}

function handleClick(el) {
    const id = parseInt(el.id);
    if (array[id] !== null) {
        return;
    }
    array[id] = currentplayer;
    el.innerText = currentplayer;
    if (checkWin()) {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:white;display:flex;justify-content:center;align-items:center;font-size:2em;';
        overlay.textContent = `Player ${currentplayer} wins!`;
        document.body.appendChild(overlay);
        return;
    }
    // Check for draw
    if (array.every((cell) => cell !== null)) {
        setTimeout(() => {
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:white;display:flex;justify-content:center;align-items:center;font-size:2em;';
            overlay.textContent = "It's a draw!";
            document.body.appendChild(overlay);
        }, 100);
        return;
    }

    currentplayer = currentplayer === "X" ? "O" : "X";
}

function resetGame() {
    array = Array(9).fill(null);
    currentplayer = "X";
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i.toString());
        if (cell) {
            cell.innerText = "";
        }
    }
}