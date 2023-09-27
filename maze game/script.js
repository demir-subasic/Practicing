document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
  
    const mazeSize = 5;
    const mazeGrid = Array.from({ length: mazeSize }, () =>
      Array.from({ length: mazeSize }, () => Math.random() < 0.3)
    );
  
    mazeGrid[0][0] = false; // Starting point
    mazeGrid[mazeSize - 1][mazeSize - 1] = false; // Ending point
  
    for (let row = 0; row < mazeSize; row++) {
      for (let col = 0; col < mazeSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (mazeGrid[row][col]) {
          cell.classList.add('wall');
        } else {
          cell.classList.add('path');
        }
        maze.appendChild(cell);
      }
    }
  
    const startCell = document.querySelector('.cell:nth-child(1)');
    const endCell = document.querySelector(`.cell:nth-child(${mazeSize * mazeSize})`);
  
    startCell.classList.add('start');
    endCell.classList.add('end');
  
    const player = document.createElement('div');
    player.classList.add('player');
    maze.appendChild(player);
    let currentPlayerPosition = 0;
  
    document.addEventListener('keydown', (event) => {
      let newRow, newCol;
  
      switch (event.key) {
        case 'ArrowUp':
          newRow = Math.max(0, Math.floor(currentPlayerPosition / mazeSize) - 1);
          newCol = currentPlayerPosition % mazeSize;
          break;
        case 'ArrowDown':
          newRow = Math.min(mazeSize - 1, Math.floor(currentPlayerPosition / mazeSize) + 1);
          newCol = currentPlayerPosition % mazeSize;
          break;
        case 'ArrowLeft':
          newRow = Math.floor(currentPlayerPosition / mazeSize);
          newCol = Math.max(0, (currentPlayerPosition % mazeSize) - 1);
          break;
        case 'ArrowRight':
          newRow = Math.floor(currentPlayerPosition / mazeSize);
          newCol = Math.min(mazeSize - 1, (currentPlayerPosition % mazeSize) + 1);
          break;
        default:
          return;
      }
  
      const newCellIndex = newRow * mazeSize + newCol;
      const newCell = maze.children[newCellIndex];
  
      if (!newCell.classList.contains('wall')) {
        player.style.gridRow = `${newRow + 1}`;
        player.style.gridColumn = `${newCol + 1}`;
        currentPlayerPosition = newCellIndex;
  
        if (currentPlayerPosition === mazeSize * mazeSize - 1) {
          alert('You won!');
        }
      }
    });
  });
  