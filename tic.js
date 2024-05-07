function game(){

    player1Color = "#0000ff"
    player2Color = "#ffa500"

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


    //const pickers = document.querySelectorAll("pickers")
   const player1Picker = document.getElementById("picker1");
   player1Picker.disabled = false
    const player2Picker = document.getElementById("picker2");
    player2Picker.disabled = false


    player1Picker.addEventListener("change", pickColor1)
    player2Picker.addEventListener("change", pickColor2)
    

    function pickColor1(){
        console.log("Player 1 color changed")
        player1Color = this.value;
    }

    function pickColor2(){
        console.log("Player 2 color changed")
        player2Color = this.value;
    }




    squares.forEach(element => {
        element.addEventListener("click", placePiece)
                

         function placePiece(){
             if(!element.classList.contains("clicked")){
                 console.log("piece has been placed");
                 if(turn%2 ===1){
                     element.style.backgroundColor = player1Color;
                 }
                 else{
                     element.style.backgroundColor = player2Color;
                 }
                 turn+=1;
                 element.classList.add("clicked")
                 console.log(turn)
                 console.log(turn%2)
                
                 function win(x,y,z){
                      if((squares[x].style.backgroundColor === squares[y].style.backgroundColor)
                 &&
                 (squares[x].style.backgroundColor === squares[z].style.backgroundColor)
                 && 
                 (squares[x,y,z].classList.contains("clicked")))
                     {
                        squares[x].style.borderColor = "red";
                        squares[y].style.borderColor = "red";
                        squares[z].style.borderColor = "red";
                        squares[x].style.borderWidth = "5px";
                        squares[y].style.borderWidth = "5px";
                        squares[z].style.borderWidth = "5px";
                         alert("Player Wins")}
                 }
                 win(0,1,2)
                 win(3,4,5)
                 win(6,7,8)
                 win(0,3,6)
                 win(1,4,7)
                 win(2,5,8)
                 win(0,4,8)
                 win(2,4,6)      
                 console.log(turn)

                 if(turn>1){
                    player1Picker.disabled = true;
                }
                else{player1Picker.enabled = true}
            
                if(turn>2){
                    player2Picker.disabled = true;
                }
                else{player2Picker.enabled = true}

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


   


}

game();
