
let board = [];
//let progressArr = [];

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    
    if ( playerSpan.innerText === 'X' ) {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        //progressArr[clickedId] = 'X';
        board[clickedId] = 'X';
        console.log('Clicked: ', clickedId, ' Added: X');
    } else if ( playerSpan.innerText === 'O' ) {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        //progressArr[clickedId] = 'O';
        board[clickedId] = 'O';
        console.log('Clicked: ', clickedId, ' Added: O');
    }
    console.log('Board Status: ',board);
    winCheck();
}




function winCheck() {
    //let possWins = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

     const topLeft = board[0];
     const topCenter = board[1];
     const topRight = board[2];
     const middleLeft = board[3];
     const middleCenter = board[4];
     const middleRight = board[5];
     const bottomLeft = board[6];
     const bottomCenter = board[7];
     const bottomRight = board[8];


   if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  // DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
    clearBoard();
  }
}

function clearBoard() {
    location.reload();
    //board = [];
    //let rowClear = document.getElementsByTagName('td');
    //rowClear = [];
    //rowClear.innerHTML = <td></td>; 
    // console.log(rowClear);
    // console.log(board);
    // console.log(rowClear);
    
}

/*  
Possible Win Combos:
Horiz:
0,1,2
3,4,5
6,7,8

Vert:
0,3,6
1,4,7
2,5,8

Diag:
0,4,8
2,4,6

[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
*/