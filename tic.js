var player1Score = 0
var player2Score = 0

player1Color = "#0000ff"
color1Box.style.backgroundColor = player1Color
player2Color = "#ffa500"
color2Box.style.backgroundColor = player2Color

function game(){

    const player1ScoreBox = document.getElementById("player1ScoreBox");
    const player2ScoreBox = document.getElementById("player2ScoreBox");

    player1ScoreBox.innerHTML = player1Score;
    player2ScoreBox.innerHTML = player2Score;
    
    const color1Box = document.getElementById("color1Box")
    const color2Box = document.getElementById("color2Box")

  

    let turn = 1;

    function createBoard(){

        boardArea=document.getElementById("boardArea")

        board = document.createElement("div")
        board.setAttribute("id", "board")
        boardArea.appendChild(board)


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


   const player1Picker = document.getElementById("picker1");
   player1Picker.disabled = false
    const player2Picker = document.getElementById("picker2");
    player2Picker.disabled = false


    player1Picker.addEventListener("change", pickColor1)
    player2Picker.addEventListener("change", pickColor2)
    

    function pickColor1(){
        player1Color = this.value;
        color1Box.style.backgroundColor = this.value
        console.log(color1Box.style.backgroundColor)
    }

    function pickColor2(){
        player2Color = this.value;
        color2Box.style.backgroundColor = this.value
    }




    squares.forEach(element => {
        element.addEventListener("click", placePiece)
                

         function placePiece(){
             if(!element.classList.contains("clicked")){
                 if(turn%2 ===1){
                     element.style.backgroundColor = player1Color;
                 }
                 else{
                     element.style.backgroundColor = player2Color;
                 }
                 turn+=1;
                 element.classList.add("clicked")

                 function win(x,y,z){

                      if((squares[x].style.backgroundColor === squares[y].style.backgroundColor)
                         &&
                         (squares[x].style.backgroundColor === squares[z].style.backgroundColor)
                         && 
                         ((squares[x,y,z].style.backgroundColor === color1Box.style.backgroundColor)
                        ||
                         (squares[x,y,z].style.backgroundColor === color2Box.style.backgroundColor))
                        )
                     {
                        squares[x].style.borderColor = "red";
                        squares[y].style.borderColor = "red";
                        squares[z].style.borderColor = "red";
                        squares[x].style.borderWidth = "5px";
                        squares[y].style.borderWidth = "5px";
                        squares[z].style.borderWidth = "5px";
                         if(turn%2===0){
                            //alert("Player 1 wins")
                            player1Score +=1
                            player1ScoreBox.innerHTML = player1Score;
                            console.log("Player 1 score is " + player1Score + squares[x,y,z].style.backgroundColor)
                         }
                         else{
                            //alert("Player 2 wins")
                            player2Score+=1
                            player2ScoreBox.innerHTML = player2Score;
                            console.log("Player 2 score is " + player2Score)
                         }
                        
                         squares.forEach(element => {
                            element.classList.add("clicked")
                            
                         });
                        
                        
                    }

                    
                 }
                 win(0,1,2)
                 win(3,4,5)
                 win(6,7,8)
                 win(0,3,6)
                 win(1,4,7)
                 win(2,5,8)
                 win(0,4,8)
                 win(2,4,6)      
                 
                 if(turn>1){
                    player1Picker.disabled = true;
                }
                            
                if(turn>2){
                    player2Picker.disabled = true;
                }

            }

            

            if(turn === 10){
                alert("Nobody wins..")
                board.remove();
                newBoard = document.createElement("div")
                newBoard.setAttribute("id", "board")


                game();
            }
        }
           
        
    });

    const replay = document.getElementById("replay");
    replay.addEventListener("click", newGame)

    function newGame(){
        //board = document.getElementById("board")
        board.remove();
        game();
    }
   


}

game();
