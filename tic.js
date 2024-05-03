function game(){

    function createBoard(){
       squares = [];
       for(i=0;i<9;i++){
        function createSquare(){
            square = document.createElement("div");
            square.classList.add("square");
            squares.push(square);
            board.appendChild(square);
        }
        createSquare()
       }
    }

    createBoard();


}

game();
